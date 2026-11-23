import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostXAmzTargetPhotonAdminProxyServiceAssociateApplicationFleetKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.AssociateApplicationFleet',
    '/#X-Amz-Target=PhotonAdminProxyService.AssociateApplicationFleet',
    'POST',
  ] as const
}

export function usePostXAmzTargetPhotonAdminProxyServiceAssociateApplicationFleet<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.AssociateApplicationFleet']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetPhotonAdminProxyServiceAssociateApplicationFleetKey()
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
            (typeof client)['#X-Amz-Target=PhotonAdminProxyService.AssociateApplicationFleet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=PhotonAdminProxyService.AssociateApplicationFleet'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetPhotonAdminProxyServiceAssociateApplicationToEntitlementKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.AssociateApplicationToEntitlement',
    '/#X-Amz-Target=PhotonAdminProxyService.AssociateApplicationToEntitlement',
    'POST',
  ] as const
}

export function usePostXAmzTargetPhotonAdminProxyServiceAssociateApplicationToEntitlement<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.AssociateApplicationToEntitlement']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetPhotonAdminProxyServiceAssociateApplicationToEntitlementKey()
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
            (typeof client)['#X-Amz-Target=PhotonAdminProxyService.AssociateApplicationToEntitlement']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=PhotonAdminProxyService.AssociateApplicationToEntitlement'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetPhotonAdminProxyServiceAssociateFleetKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.AssociateFleet',
    '/#X-Amz-Target=PhotonAdminProxyService.AssociateFleet',
    'POST',
  ] as const
}

export function usePostXAmzTargetPhotonAdminProxyServiceAssociateFleet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.AssociateFleet']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetPhotonAdminProxyServiceAssociateFleetKey()
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
            (typeof client)['#X-Amz-Target=PhotonAdminProxyService.AssociateFleet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=PhotonAdminProxyService.AssociateFleet'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetPhotonAdminProxyServiceBatchAssociateUserStackKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.BatchAssociateUserStack',
    '/#X-Amz-Target=PhotonAdminProxyService.BatchAssociateUserStack',
    'POST',
  ] as const
}

export function usePostXAmzTargetPhotonAdminProxyServiceBatchAssociateUserStack<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.BatchAssociateUserStack']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetPhotonAdminProxyServiceBatchAssociateUserStackKey()
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
            (typeof client)['#X-Amz-Target=PhotonAdminProxyService.BatchAssociateUserStack']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=PhotonAdminProxyService.BatchAssociateUserStack'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetPhotonAdminProxyServiceBatchDisassociateUserStackKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.BatchDisassociateUserStack',
    '/#X-Amz-Target=PhotonAdminProxyService.BatchDisassociateUserStack',
    'POST',
  ] as const
}

export function usePostXAmzTargetPhotonAdminProxyServiceBatchDisassociateUserStack<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.BatchDisassociateUserStack']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetPhotonAdminProxyServiceBatchDisassociateUserStackKey()
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
            (typeof client)['#X-Amz-Target=PhotonAdminProxyService.BatchDisassociateUserStack']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=PhotonAdminProxyService.BatchDisassociateUserStack'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetPhotonAdminProxyServiceCopyImageKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.CopyImage',
    '/#X-Amz-Target=PhotonAdminProxyService.CopyImage',
    'POST',
  ] as const
}

export function usePostXAmzTargetPhotonAdminProxyServiceCopyImage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=PhotonAdminProxyService.CopyImage']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetPhotonAdminProxyServiceCopyImageKey()
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
            (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CopyImage']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=PhotonAdminProxyService.CopyImage'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetPhotonAdminProxyServiceCreateAppBlockKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.CreateAppBlock',
    '/#X-Amz-Target=PhotonAdminProxyService.CreateAppBlock',
    'POST',
  ] as const
}

export function usePostXAmzTargetPhotonAdminProxyServiceCreateAppBlock<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateAppBlock']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetPhotonAdminProxyServiceCreateAppBlockKey()
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
            (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateAppBlock']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=PhotonAdminProxyService.CreateAppBlock'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetPhotonAdminProxyServiceCreateApplicationKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.CreateApplication',
    '/#X-Amz-Target=PhotonAdminProxyService.CreateApplication',
    'POST',
  ] as const
}

export function usePostXAmzTargetPhotonAdminProxyServiceCreateApplication<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateApplication']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetPhotonAdminProxyServiceCreateApplicationKey()
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
            (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateApplication']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=PhotonAdminProxyService.CreateApplication'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetPhotonAdminProxyServiceCreateDirectoryConfigKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.CreateDirectoryConfig',
    '/#X-Amz-Target=PhotonAdminProxyService.CreateDirectoryConfig',
    'POST',
  ] as const
}

export function usePostXAmzTargetPhotonAdminProxyServiceCreateDirectoryConfig<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateDirectoryConfig']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetPhotonAdminProxyServiceCreateDirectoryConfigKey()
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
            (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateDirectoryConfig']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=PhotonAdminProxyService.CreateDirectoryConfig'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetPhotonAdminProxyServiceCreateEntitlementKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.CreateEntitlement',
    '/#X-Amz-Target=PhotonAdminProxyService.CreateEntitlement',
    'POST',
  ] as const
}

export function usePostXAmzTargetPhotonAdminProxyServiceCreateEntitlement<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateEntitlement']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetPhotonAdminProxyServiceCreateEntitlementKey()
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
            (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateEntitlement']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=PhotonAdminProxyService.CreateEntitlement'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetPhotonAdminProxyServiceCreateFleetKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.CreateFleet',
    '/#X-Amz-Target=PhotonAdminProxyService.CreateFleet',
    'POST',
  ] as const
}

export function usePostXAmzTargetPhotonAdminProxyServiceCreateFleet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateFleet']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetPhotonAdminProxyServiceCreateFleetKey()
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
            (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateFleet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=PhotonAdminProxyService.CreateFleet'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetPhotonAdminProxyServiceCreateImageBuilderKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.CreateImageBuilder',
    '/#X-Amz-Target=PhotonAdminProxyService.CreateImageBuilder',
    'POST',
  ] as const
}

export function usePostXAmzTargetPhotonAdminProxyServiceCreateImageBuilder<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateImageBuilder']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetPhotonAdminProxyServiceCreateImageBuilderKey()
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
            (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateImageBuilder']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=PhotonAdminProxyService.CreateImageBuilder'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetPhotonAdminProxyServiceCreateImageBuilderStreamingURLKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.CreateImageBuilderStreamingURL',
    '/#X-Amz-Target=PhotonAdminProxyService.CreateImageBuilderStreamingURL',
    'POST',
  ] as const
}

export function usePostXAmzTargetPhotonAdminProxyServiceCreateImageBuilderStreamingURL<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateImageBuilderStreamingURL']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetPhotonAdminProxyServiceCreateImageBuilderStreamingURLKey()
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
            (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateImageBuilderStreamingURL']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=PhotonAdminProxyService.CreateImageBuilderStreamingURL'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetPhotonAdminProxyServiceCreateStackKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.CreateStack',
    '/#X-Amz-Target=PhotonAdminProxyService.CreateStack',
    'POST',
  ] as const
}

export function usePostXAmzTargetPhotonAdminProxyServiceCreateStack<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateStack']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetPhotonAdminProxyServiceCreateStackKey()
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
            (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateStack']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=PhotonAdminProxyService.CreateStack'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetPhotonAdminProxyServiceCreateStreamingURLKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.CreateStreamingURL',
    '/#X-Amz-Target=PhotonAdminProxyService.CreateStreamingURL',
    'POST',
  ] as const
}

export function usePostXAmzTargetPhotonAdminProxyServiceCreateStreamingURL<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateStreamingURL']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetPhotonAdminProxyServiceCreateStreamingURLKey()
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
            (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateStreamingURL']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=PhotonAdminProxyService.CreateStreamingURL'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetPhotonAdminProxyServiceCreateUpdatedImageKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.CreateUpdatedImage',
    '/#X-Amz-Target=PhotonAdminProxyService.CreateUpdatedImage',
    'POST',
  ] as const
}

export function usePostXAmzTargetPhotonAdminProxyServiceCreateUpdatedImage<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateUpdatedImage']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetPhotonAdminProxyServiceCreateUpdatedImageKey()
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
            (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateUpdatedImage']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=PhotonAdminProxyService.CreateUpdatedImage'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetPhotonAdminProxyServiceCreateUsageReportSubscriptionKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.CreateUsageReportSubscription',
    '/#X-Amz-Target=PhotonAdminProxyService.CreateUsageReportSubscription',
    'POST',
  ] as const
}

export function usePostXAmzTargetPhotonAdminProxyServiceCreateUsageReportSubscription<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateUsageReportSubscription']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetPhotonAdminProxyServiceCreateUsageReportSubscriptionKey()
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
            (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateUsageReportSubscription']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=PhotonAdminProxyService.CreateUsageReportSubscription'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetPhotonAdminProxyServiceCreateUserKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.CreateUser',
    '/#X-Amz-Target=PhotonAdminProxyService.CreateUser',
    'POST',
  ] as const
}

export function usePostXAmzTargetPhotonAdminProxyServiceCreateUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateUser']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetPhotonAdminProxyServiceCreateUserKey()
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
            (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateUser']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=PhotonAdminProxyService.CreateUser'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetPhotonAdminProxyServiceDeleteAppBlockKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.DeleteAppBlock',
    '/#X-Amz-Target=PhotonAdminProxyService.DeleteAppBlock',
    'POST',
  ] as const
}

export function usePostXAmzTargetPhotonAdminProxyServiceDeleteAppBlock<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteAppBlock']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetPhotonAdminProxyServiceDeleteAppBlockKey()
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
            (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteAppBlock']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=PhotonAdminProxyService.DeleteAppBlock'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetPhotonAdminProxyServiceDeleteApplicationKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.DeleteApplication',
    '/#X-Amz-Target=PhotonAdminProxyService.DeleteApplication',
    'POST',
  ] as const
}

export function usePostXAmzTargetPhotonAdminProxyServiceDeleteApplication<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteApplication']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetPhotonAdminProxyServiceDeleteApplicationKey()
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
            (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteApplication']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=PhotonAdminProxyService.DeleteApplication'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetPhotonAdminProxyServiceDeleteDirectoryConfigKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.DeleteDirectoryConfig',
    '/#X-Amz-Target=PhotonAdminProxyService.DeleteDirectoryConfig',
    'POST',
  ] as const
}

export function usePostXAmzTargetPhotonAdminProxyServiceDeleteDirectoryConfig<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteDirectoryConfig']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetPhotonAdminProxyServiceDeleteDirectoryConfigKey()
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
            (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteDirectoryConfig']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=PhotonAdminProxyService.DeleteDirectoryConfig'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetPhotonAdminProxyServiceDeleteEntitlementKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.DeleteEntitlement',
    '/#X-Amz-Target=PhotonAdminProxyService.DeleteEntitlement',
    'POST',
  ] as const
}

export function usePostXAmzTargetPhotonAdminProxyServiceDeleteEntitlement<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteEntitlement']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetPhotonAdminProxyServiceDeleteEntitlementKey()
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
            (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteEntitlement']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=PhotonAdminProxyService.DeleteEntitlement'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetPhotonAdminProxyServiceDeleteFleetKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.DeleteFleet',
    '/#X-Amz-Target=PhotonAdminProxyService.DeleteFleet',
    'POST',
  ] as const
}

export function usePostXAmzTargetPhotonAdminProxyServiceDeleteFleet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteFleet']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetPhotonAdminProxyServiceDeleteFleetKey()
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
            (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteFleet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=PhotonAdminProxyService.DeleteFleet'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetPhotonAdminProxyServiceDeleteImageKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.DeleteImage',
    '/#X-Amz-Target=PhotonAdminProxyService.DeleteImage',
    'POST',
  ] as const
}

export function usePostXAmzTargetPhotonAdminProxyServiceDeleteImage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteImage']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetPhotonAdminProxyServiceDeleteImageKey()
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
            (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteImage']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=PhotonAdminProxyService.DeleteImage'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetPhotonAdminProxyServiceDeleteImageBuilderKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.DeleteImageBuilder',
    '/#X-Amz-Target=PhotonAdminProxyService.DeleteImageBuilder',
    'POST',
  ] as const
}

export function usePostXAmzTargetPhotonAdminProxyServiceDeleteImageBuilder<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteImageBuilder']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetPhotonAdminProxyServiceDeleteImageBuilderKey()
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
            (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteImageBuilder']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=PhotonAdminProxyService.DeleteImageBuilder'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetPhotonAdminProxyServiceDeleteImagePermissionsKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.DeleteImagePermissions',
    '/#X-Amz-Target=PhotonAdminProxyService.DeleteImagePermissions',
    'POST',
  ] as const
}

export function usePostXAmzTargetPhotonAdminProxyServiceDeleteImagePermissions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteImagePermissions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetPhotonAdminProxyServiceDeleteImagePermissionsKey()
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
            (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteImagePermissions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=PhotonAdminProxyService.DeleteImagePermissions'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetPhotonAdminProxyServiceDeleteStackKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.DeleteStack',
    '/#X-Amz-Target=PhotonAdminProxyService.DeleteStack',
    'POST',
  ] as const
}

export function usePostXAmzTargetPhotonAdminProxyServiceDeleteStack<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteStack']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetPhotonAdminProxyServiceDeleteStackKey()
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
            (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteStack']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=PhotonAdminProxyService.DeleteStack'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetPhotonAdminProxyServiceDeleteUsageReportSubscriptionKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.DeleteUsageReportSubscription',
    '/#X-Amz-Target=PhotonAdminProxyService.DeleteUsageReportSubscription',
    'POST',
  ] as const
}

export function usePostXAmzTargetPhotonAdminProxyServiceDeleteUsageReportSubscription<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteUsageReportSubscription']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetPhotonAdminProxyServiceDeleteUsageReportSubscriptionKey()
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
            (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteUsageReportSubscription']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=PhotonAdminProxyService.DeleteUsageReportSubscription'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetPhotonAdminProxyServiceDeleteUserKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.DeleteUser',
    '/#X-Amz-Target=PhotonAdminProxyService.DeleteUser',
    'POST',
  ] as const
}

export function usePostXAmzTargetPhotonAdminProxyServiceDeleteUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteUser']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetPhotonAdminProxyServiceDeleteUserKey()
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
            (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteUser']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=PhotonAdminProxyService.DeleteUser'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetPhotonAdminProxyServiceDescribeAppBlocksKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.DescribeAppBlocks',
    '/#X-Amz-Target=PhotonAdminProxyService.DescribeAppBlocks',
    'POST',
  ] as const
}

export function usePostXAmzTargetPhotonAdminProxyServiceDescribeAppBlocks<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeAppBlocks']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetPhotonAdminProxyServiceDescribeAppBlocksKey()
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
            (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeAppBlocks']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=PhotonAdminProxyService.DescribeAppBlocks'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetPhotonAdminProxyServiceDescribeApplicationFleetAssociationsKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.DescribeApplicationFleetAssociations',
    '/#X-Amz-Target=PhotonAdminProxyService.DescribeApplicationFleetAssociations',
    'POST',
  ] as const
}

export function usePostXAmzTargetPhotonAdminProxyServiceDescribeApplicationFleetAssociations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeApplicationFleetAssociations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetPhotonAdminProxyServiceDescribeApplicationFleetAssociationsKey()
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
            (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeApplicationFleetAssociations']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=PhotonAdminProxyService.DescribeApplicationFleetAssociations'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetPhotonAdminProxyServiceDescribeApplicationsKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.DescribeApplications',
    '/#X-Amz-Target=PhotonAdminProxyService.DescribeApplications',
    'POST',
  ] as const
}

export function usePostXAmzTargetPhotonAdminProxyServiceDescribeApplications<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeApplications']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetPhotonAdminProxyServiceDescribeApplicationsKey()
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
            (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeApplications']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=PhotonAdminProxyService.DescribeApplications'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetPhotonAdminProxyServiceDescribeDirectoryConfigsKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.DescribeDirectoryConfigs',
    '/#X-Amz-Target=PhotonAdminProxyService.DescribeDirectoryConfigs',
    'POST',
  ] as const
}

export function usePostXAmzTargetPhotonAdminProxyServiceDescribeDirectoryConfigs<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeDirectoryConfigs']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetPhotonAdminProxyServiceDescribeDirectoryConfigsKey()
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
            (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeDirectoryConfigs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=PhotonAdminProxyService.DescribeDirectoryConfigs'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetPhotonAdminProxyServiceDescribeEntitlementsKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.DescribeEntitlements',
    '/#X-Amz-Target=PhotonAdminProxyService.DescribeEntitlements',
    'POST',
  ] as const
}

export function usePostXAmzTargetPhotonAdminProxyServiceDescribeEntitlements<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeEntitlements']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetPhotonAdminProxyServiceDescribeEntitlementsKey()
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
            (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeEntitlements']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=PhotonAdminProxyService.DescribeEntitlements'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetPhotonAdminProxyServiceDescribeFleetsKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.DescribeFleets',
    '/#X-Amz-Target=PhotonAdminProxyService.DescribeFleets',
    'POST',
  ] as const
}

export function usePostXAmzTargetPhotonAdminProxyServiceDescribeFleets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeFleets']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetPhotonAdminProxyServiceDescribeFleetsKey()
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
            (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeFleets']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=PhotonAdminProxyService.DescribeFleets'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetPhotonAdminProxyServiceDescribeImageBuildersKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.DescribeImageBuilders',
    '/#X-Amz-Target=PhotonAdminProxyService.DescribeImageBuilders',
    'POST',
  ] as const
}

export function usePostXAmzTargetPhotonAdminProxyServiceDescribeImageBuilders<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeImageBuilders']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetPhotonAdminProxyServiceDescribeImageBuildersKey()
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
            (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeImageBuilders']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=PhotonAdminProxyService.DescribeImageBuilders'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetPhotonAdminProxyServiceDescribeImagePermissionsKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.DescribeImagePermissions',
    '/#X-Amz-Target=PhotonAdminProxyService.DescribeImagePermissions',
    'POST',
  ] as const
}

export function usePostXAmzTargetPhotonAdminProxyServiceDescribeImagePermissions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeImagePermissions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetPhotonAdminProxyServiceDescribeImagePermissionsKey()
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
            (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeImagePermissions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=PhotonAdminProxyService.DescribeImagePermissions'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetPhotonAdminProxyServiceDescribeImagesKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.DescribeImages',
    '/#X-Amz-Target=PhotonAdminProxyService.DescribeImages',
    'POST',
  ] as const
}

export function usePostXAmzTargetPhotonAdminProxyServiceDescribeImages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeImages']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetPhotonAdminProxyServiceDescribeImagesKey()
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
            (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeImages']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=PhotonAdminProxyService.DescribeImages'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetPhotonAdminProxyServiceDescribeSessionsKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.DescribeSessions',
    '/#X-Amz-Target=PhotonAdminProxyService.DescribeSessions',
    'POST',
  ] as const
}

export function usePostXAmzTargetPhotonAdminProxyServiceDescribeSessions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeSessions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetPhotonAdminProxyServiceDescribeSessionsKey()
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
            (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeSessions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=PhotonAdminProxyService.DescribeSessions'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetPhotonAdminProxyServiceDescribeStacksKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.DescribeStacks',
    '/#X-Amz-Target=PhotonAdminProxyService.DescribeStacks',
    'POST',
  ] as const
}

export function usePostXAmzTargetPhotonAdminProxyServiceDescribeStacks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeStacks']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetPhotonAdminProxyServiceDescribeStacksKey()
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
            (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeStacks']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=PhotonAdminProxyService.DescribeStacks'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetPhotonAdminProxyServiceDescribeUsageReportSubscriptionsKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.DescribeUsageReportSubscriptions',
    '/#X-Amz-Target=PhotonAdminProxyService.DescribeUsageReportSubscriptions',
    'POST',
  ] as const
}

export function usePostXAmzTargetPhotonAdminProxyServiceDescribeUsageReportSubscriptions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeUsageReportSubscriptions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetPhotonAdminProxyServiceDescribeUsageReportSubscriptionsKey()
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
            (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeUsageReportSubscriptions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=PhotonAdminProxyService.DescribeUsageReportSubscriptions'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetPhotonAdminProxyServiceDescribeUserStackAssociationsKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.DescribeUserStackAssociations',
    '/#X-Amz-Target=PhotonAdminProxyService.DescribeUserStackAssociations',
    'POST',
  ] as const
}

export function usePostXAmzTargetPhotonAdminProxyServiceDescribeUserStackAssociations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeUserStackAssociations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetPhotonAdminProxyServiceDescribeUserStackAssociationsKey()
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
            (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeUserStackAssociations']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=PhotonAdminProxyService.DescribeUserStackAssociations'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetPhotonAdminProxyServiceDescribeUsersKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.DescribeUsers',
    '/#X-Amz-Target=PhotonAdminProxyService.DescribeUsers',
    'POST',
  ] as const
}

export function usePostXAmzTargetPhotonAdminProxyServiceDescribeUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeUsers']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetPhotonAdminProxyServiceDescribeUsersKey()
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
            (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeUsers']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=PhotonAdminProxyService.DescribeUsers'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetPhotonAdminProxyServiceDisableUserKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.DisableUser',
    '/#X-Amz-Target=PhotonAdminProxyService.DisableUser',
    'POST',
  ] as const
}

export function usePostXAmzTargetPhotonAdminProxyServiceDisableUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=PhotonAdminProxyService.DisableUser']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetPhotonAdminProxyServiceDisableUserKey()
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
            (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DisableUser']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=PhotonAdminProxyService.DisableUser'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetPhotonAdminProxyServiceDisassociateApplicationFleetKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.DisassociateApplicationFleet',
    '/#X-Amz-Target=PhotonAdminProxyService.DisassociateApplicationFleet',
    'POST',
  ] as const
}

export function usePostXAmzTargetPhotonAdminProxyServiceDisassociateApplicationFleet<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DisassociateApplicationFleet']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetPhotonAdminProxyServiceDisassociateApplicationFleetKey()
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
            (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DisassociateApplicationFleet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=PhotonAdminProxyService.DisassociateApplicationFleet'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetPhotonAdminProxyServiceDisassociateApplicationFromEntitlementKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.DisassociateApplicationFromEntitlement',
    '/#X-Amz-Target=PhotonAdminProxyService.DisassociateApplicationFromEntitlement',
    'POST',
  ] as const
}

export function usePostXAmzTargetPhotonAdminProxyServiceDisassociateApplicationFromEntitlement<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DisassociateApplicationFromEntitlement']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetPhotonAdminProxyServiceDisassociateApplicationFromEntitlementKey()
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
            (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DisassociateApplicationFromEntitlement']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=PhotonAdminProxyService.DisassociateApplicationFromEntitlement'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetPhotonAdminProxyServiceDisassociateFleetKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.DisassociateFleet',
    '/#X-Amz-Target=PhotonAdminProxyService.DisassociateFleet',
    'POST',
  ] as const
}

export function usePostXAmzTargetPhotonAdminProxyServiceDisassociateFleet<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DisassociateFleet']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetPhotonAdminProxyServiceDisassociateFleetKey()
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
            (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DisassociateFleet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=PhotonAdminProxyService.DisassociateFleet'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetPhotonAdminProxyServiceEnableUserKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.EnableUser',
    '/#X-Amz-Target=PhotonAdminProxyService.EnableUser',
    'POST',
  ] as const
}

export function usePostXAmzTargetPhotonAdminProxyServiceEnableUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=PhotonAdminProxyService.EnableUser']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetPhotonAdminProxyServiceEnableUserKey()
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
            (typeof client)['#X-Amz-Target=PhotonAdminProxyService.EnableUser']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=PhotonAdminProxyService.EnableUser'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetPhotonAdminProxyServiceExpireSessionKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.ExpireSession',
    '/#X-Amz-Target=PhotonAdminProxyService.ExpireSession',
    'POST',
  ] as const
}

export function usePostXAmzTargetPhotonAdminProxyServiceExpireSession<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.ExpireSession']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetPhotonAdminProxyServiceExpireSessionKey()
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
            (typeof client)['#X-Amz-Target=PhotonAdminProxyService.ExpireSession']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=PhotonAdminProxyService.ExpireSession'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetPhotonAdminProxyServiceListAssociatedFleetsKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.ListAssociatedFleets',
    '/#X-Amz-Target=PhotonAdminProxyService.ListAssociatedFleets',
    'POST',
  ] as const
}

export function usePostXAmzTargetPhotonAdminProxyServiceListAssociatedFleets<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.ListAssociatedFleets']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetPhotonAdminProxyServiceListAssociatedFleetsKey()
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
            (typeof client)['#X-Amz-Target=PhotonAdminProxyService.ListAssociatedFleets']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=PhotonAdminProxyService.ListAssociatedFleets'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetPhotonAdminProxyServiceListAssociatedStacksKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.ListAssociatedStacks',
    '/#X-Amz-Target=PhotonAdminProxyService.ListAssociatedStacks',
    'POST',
  ] as const
}

export function usePostXAmzTargetPhotonAdminProxyServiceListAssociatedStacks<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.ListAssociatedStacks']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetPhotonAdminProxyServiceListAssociatedStacksKey()
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
            (typeof client)['#X-Amz-Target=PhotonAdminProxyService.ListAssociatedStacks']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=PhotonAdminProxyService.ListAssociatedStacks'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetPhotonAdminProxyServiceListEntitledApplicationsKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.ListEntitledApplications',
    '/#X-Amz-Target=PhotonAdminProxyService.ListEntitledApplications',
    'POST',
  ] as const
}

export function usePostXAmzTargetPhotonAdminProxyServiceListEntitledApplications<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.ListEntitledApplications']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetPhotonAdminProxyServiceListEntitledApplicationsKey()
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
            (typeof client)['#X-Amz-Target=PhotonAdminProxyService.ListEntitledApplications']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=PhotonAdminProxyService.ListEntitledApplications'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetPhotonAdminProxyServiceListTagsForResourceKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.ListTagsForResource',
    '/#X-Amz-Target=PhotonAdminProxyService.ListTagsForResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetPhotonAdminProxyServiceListTagsForResource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.ListTagsForResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetPhotonAdminProxyServiceListTagsForResourceKey()
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
            (typeof client)['#X-Amz-Target=PhotonAdminProxyService.ListTagsForResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=PhotonAdminProxyService.ListTagsForResource'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetPhotonAdminProxyServiceStartFleetKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.StartFleet',
    '/#X-Amz-Target=PhotonAdminProxyService.StartFleet',
    'POST',
  ] as const
}

export function usePostXAmzTargetPhotonAdminProxyServiceStartFleet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=PhotonAdminProxyService.StartFleet']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetPhotonAdminProxyServiceStartFleetKey()
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
            (typeof client)['#X-Amz-Target=PhotonAdminProxyService.StartFleet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=PhotonAdminProxyService.StartFleet'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetPhotonAdminProxyServiceStartImageBuilderKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.StartImageBuilder',
    '/#X-Amz-Target=PhotonAdminProxyService.StartImageBuilder',
    'POST',
  ] as const
}

export function usePostXAmzTargetPhotonAdminProxyServiceStartImageBuilder<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.StartImageBuilder']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetPhotonAdminProxyServiceStartImageBuilderKey()
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
            (typeof client)['#X-Amz-Target=PhotonAdminProxyService.StartImageBuilder']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=PhotonAdminProxyService.StartImageBuilder'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetPhotonAdminProxyServiceStopFleetKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.StopFleet',
    '/#X-Amz-Target=PhotonAdminProxyService.StopFleet',
    'POST',
  ] as const
}

export function usePostXAmzTargetPhotonAdminProxyServiceStopFleet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=PhotonAdminProxyService.StopFleet']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetPhotonAdminProxyServiceStopFleetKey()
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
            (typeof client)['#X-Amz-Target=PhotonAdminProxyService.StopFleet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=PhotonAdminProxyService.StopFleet'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetPhotonAdminProxyServiceStopImageBuilderKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.StopImageBuilder',
    '/#X-Amz-Target=PhotonAdminProxyService.StopImageBuilder',
    'POST',
  ] as const
}

export function usePostXAmzTargetPhotonAdminProxyServiceStopImageBuilder<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.StopImageBuilder']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetPhotonAdminProxyServiceStopImageBuilderKey()
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
            (typeof client)['#X-Amz-Target=PhotonAdminProxyService.StopImageBuilder']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=PhotonAdminProxyService.StopImageBuilder'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetPhotonAdminProxyServiceTagResourceKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.TagResource',
    '/#X-Amz-Target=PhotonAdminProxyService.TagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetPhotonAdminProxyServiceTagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=PhotonAdminProxyService.TagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetPhotonAdminProxyServiceTagResourceKey()
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
            (typeof client)['#X-Amz-Target=PhotonAdminProxyService.TagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=PhotonAdminProxyService.TagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetPhotonAdminProxyServiceUntagResourceKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.UntagResource',
    '/#X-Amz-Target=PhotonAdminProxyService.UntagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetPhotonAdminProxyServiceUntagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.UntagResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetPhotonAdminProxyServiceUntagResourceKey()
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
            (typeof client)['#X-Amz-Target=PhotonAdminProxyService.UntagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=PhotonAdminProxyService.UntagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetPhotonAdminProxyServiceUpdateApplicationKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.UpdateApplication',
    '/#X-Amz-Target=PhotonAdminProxyService.UpdateApplication',
    'POST',
  ] as const
}

export function usePostXAmzTargetPhotonAdminProxyServiceUpdateApplication<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.UpdateApplication']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetPhotonAdminProxyServiceUpdateApplicationKey()
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
            (typeof client)['#X-Amz-Target=PhotonAdminProxyService.UpdateApplication']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=PhotonAdminProxyService.UpdateApplication'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetPhotonAdminProxyServiceUpdateDirectoryConfigKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.UpdateDirectoryConfig',
    '/#X-Amz-Target=PhotonAdminProxyService.UpdateDirectoryConfig',
    'POST',
  ] as const
}

export function usePostXAmzTargetPhotonAdminProxyServiceUpdateDirectoryConfig<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.UpdateDirectoryConfig']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetPhotonAdminProxyServiceUpdateDirectoryConfigKey()
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
            (typeof client)['#X-Amz-Target=PhotonAdminProxyService.UpdateDirectoryConfig']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=PhotonAdminProxyService.UpdateDirectoryConfig'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetPhotonAdminProxyServiceUpdateEntitlementKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.UpdateEntitlement',
    '/#X-Amz-Target=PhotonAdminProxyService.UpdateEntitlement',
    'POST',
  ] as const
}

export function usePostXAmzTargetPhotonAdminProxyServiceUpdateEntitlement<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.UpdateEntitlement']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetPhotonAdminProxyServiceUpdateEntitlementKey()
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
            (typeof client)['#X-Amz-Target=PhotonAdminProxyService.UpdateEntitlement']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=PhotonAdminProxyService.UpdateEntitlement'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetPhotonAdminProxyServiceUpdateFleetKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.UpdateFleet',
    '/#X-Amz-Target=PhotonAdminProxyService.UpdateFleet',
    'POST',
  ] as const
}

export function usePostXAmzTargetPhotonAdminProxyServiceUpdateFleet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=PhotonAdminProxyService.UpdateFleet']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetPhotonAdminProxyServiceUpdateFleetKey()
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
            (typeof client)['#X-Amz-Target=PhotonAdminProxyService.UpdateFleet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=PhotonAdminProxyService.UpdateFleet'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetPhotonAdminProxyServiceUpdateImagePermissionsKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.UpdateImagePermissions',
    '/#X-Amz-Target=PhotonAdminProxyService.UpdateImagePermissions',
    'POST',
  ] as const
}

export function usePostXAmzTargetPhotonAdminProxyServiceUpdateImagePermissions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PhotonAdminProxyService.UpdateImagePermissions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetPhotonAdminProxyServiceUpdateImagePermissionsKey()
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
            (typeof client)['#X-Amz-Target=PhotonAdminProxyService.UpdateImagePermissions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=PhotonAdminProxyService.UpdateImagePermissions'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetPhotonAdminProxyServiceUpdateStackKey() {
  return [
    '#X-Amz-Target=PhotonAdminProxyService.UpdateStack',
    '/#X-Amz-Target=PhotonAdminProxyService.UpdateStack',
    'POST',
  ] as const
}

export function usePostXAmzTargetPhotonAdminProxyServiceUpdateStack<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=PhotonAdminProxyService.UpdateStack']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetPhotonAdminProxyServiceUpdateStackKey()
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
            (typeof client)['#X-Amz-Target=PhotonAdminProxyService.UpdateStack']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=PhotonAdminProxyService.UpdateStack'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
