import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetDirectoryService_20150416AcceptSharedDirectoryKey() {
  return ['#X-Amz-Target=DirectoryService_20150416.AcceptSharedDirectory'] as const
}

export function getXAmzTargetDirectoryService_20150416AddIpRoutesKey() {
  return ['#X-Amz-Target=DirectoryService_20150416.AddIpRoutes'] as const
}

export function getXAmzTargetDirectoryService_20150416AddRegionKey() {
  return ['#X-Amz-Target=DirectoryService_20150416.AddRegion'] as const
}

export function getXAmzTargetDirectoryService_20150416AddTagsToResourceKey() {
  return ['#X-Amz-Target=DirectoryService_20150416.AddTagsToResource'] as const
}

export function getXAmzTargetDirectoryService_20150416CancelSchemaExtensionKey() {
  return ['#X-Amz-Target=DirectoryService_20150416.CancelSchemaExtension'] as const
}

export function getXAmzTargetDirectoryService_20150416ConnectDirectoryKey() {
  return ['#X-Amz-Target=DirectoryService_20150416.ConnectDirectory'] as const
}

export function getXAmzTargetDirectoryService_20150416CreateAliasKey() {
  return ['#X-Amz-Target=DirectoryService_20150416.CreateAlias'] as const
}

export function getXAmzTargetDirectoryService_20150416CreateComputerKey() {
  return ['#X-Amz-Target=DirectoryService_20150416.CreateComputer'] as const
}

export function getXAmzTargetDirectoryService_20150416CreateConditionalForwarderKey() {
  return ['#X-Amz-Target=DirectoryService_20150416.CreateConditionalForwarder'] as const
}

export function getXAmzTargetDirectoryService_20150416CreateDirectoryKey() {
  return ['#X-Amz-Target=DirectoryService_20150416.CreateDirectory'] as const
}

export function getXAmzTargetDirectoryService_20150416CreateLogSubscriptionKey() {
  return ['#X-Amz-Target=DirectoryService_20150416.CreateLogSubscription'] as const
}

export function getXAmzTargetDirectoryService_20150416CreateMicrosoftADKey() {
  return ['#X-Amz-Target=DirectoryService_20150416.CreateMicrosoftAD'] as const
}

export function getXAmzTargetDirectoryService_20150416CreateSnapshotKey() {
  return ['#X-Amz-Target=DirectoryService_20150416.CreateSnapshot'] as const
}

export function getXAmzTargetDirectoryService_20150416CreateTrustKey() {
  return ['#X-Amz-Target=DirectoryService_20150416.CreateTrust'] as const
}

export function getXAmzTargetDirectoryService_20150416DeleteConditionalForwarderKey() {
  return ['#X-Amz-Target=DirectoryService_20150416.DeleteConditionalForwarder'] as const
}

export function getXAmzTargetDirectoryService_20150416DeleteDirectoryKey() {
  return ['#X-Amz-Target=DirectoryService_20150416.DeleteDirectory'] as const
}

export function getXAmzTargetDirectoryService_20150416DeleteLogSubscriptionKey() {
  return ['#X-Amz-Target=DirectoryService_20150416.DeleteLogSubscription'] as const
}

export function getXAmzTargetDirectoryService_20150416DeleteSnapshotKey() {
  return ['#X-Amz-Target=DirectoryService_20150416.DeleteSnapshot'] as const
}

export function getXAmzTargetDirectoryService_20150416DeleteTrustKey() {
  return ['#X-Amz-Target=DirectoryService_20150416.DeleteTrust'] as const
}

export function getXAmzTargetDirectoryService_20150416DeregisterCertificateKey() {
  return ['#X-Amz-Target=DirectoryService_20150416.DeregisterCertificate'] as const
}

export function getXAmzTargetDirectoryService_20150416DeregisterEventTopicKey() {
  return ['#X-Amz-Target=DirectoryService_20150416.DeregisterEventTopic'] as const
}

export function getXAmzTargetDirectoryService_20150416DescribeCertificateKey() {
  return ['#X-Amz-Target=DirectoryService_20150416.DescribeCertificate'] as const
}

export function getXAmzTargetDirectoryService_20150416DescribeClientAuthenticationSettingsKey() {
  return ['#X-Amz-Target=DirectoryService_20150416.DescribeClientAuthenticationSettings'] as const
}

export function getXAmzTargetDirectoryService_20150416DescribeConditionalForwardersKey() {
  return ['#X-Amz-Target=DirectoryService_20150416.DescribeConditionalForwarders'] as const
}

export function getXAmzTargetDirectoryService_20150416DescribeDirectoriesKey() {
  return ['#X-Amz-Target=DirectoryService_20150416.DescribeDirectories'] as const
}

export function getXAmzTargetDirectoryService_20150416DescribeDomainControllersKey() {
  return ['#X-Amz-Target=DirectoryService_20150416.DescribeDomainControllers'] as const
}

export function getXAmzTargetDirectoryService_20150416DescribeEventTopicsKey() {
  return ['#X-Amz-Target=DirectoryService_20150416.DescribeEventTopics'] as const
}

export function getXAmzTargetDirectoryService_20150416DescribeLDAPSSettingsKey() {
  return ['#X-Amz-Target=DirectoryService_20150416.DescribeLDAPSSettings'] as const
}

export function getXAmzTargetDirectoryService_20150416DescribeRegionsKey() {
  return ['#X-Amz-Target=DirectoryService_20150416.DescribeRegions'] as const
}

export function getXAmzTargetDirectoryService_20150416DescribeSettingsKey() {
  return ['#X-Amz-Target=DirectoryService_20150416.DescribeSettings'] as const
}

export function getXAmzTargetDirectoryService_20150416DescribeSharedDirectoriesKey() {
  return ['#X-Amz-Target=DirectoryService_20150416.DescribeSharedDirectories'] as const
}

export function getXAmzTargetDirectoryService_20150416DescribeSnapshotsKey() {
  return ['#X-Amz-Target=DirectoryService_20150416.DescribeSnapshots'] as const
}

export function getXAmzTargetDirectoryService_20150416DescribeTrustsKey() {
  return ['#X-Amz-Target=DirectoryService_20150416.DescribeTrusts'] as const
}

export function getXAmzTargetDirectoryService_20150416DescribeUpdateDirectoryKey() {
  return ['#X-Amz-Target=DirectoryService_20150416.DescribeUpdateDirectory'] as const
}

export function getXAmzTargetDirectoryService_20150416DisableClientAuthenticationKey() {
  return ['#X-Amz-Target=DirectoryService_20150416.DisableClientAuthentication'] as const
}

export function getXAmzTargetDirectoryService_20150416DisableLDAPSKey() {
  return ['#X-Amz-Target=DirectoryService_20150416.DisableLDAPS'] as const
}

export function getXAmzTargetDirectoryService_20150416DisableRadiusKey() {
  return ['#X-Amz-Target=DirectoryService_20150416.DisableRadius'] as const
}

export function getXAmzTargetDirectoryService_20150416DisableSsoKey() {
  return ['#X-Amz-Target=DirectoryService_20150416.DisableSso'] as const
}

export function getXAmzTargetDirectoryService_20150416EnableClientAuthenticationKey() {
  return ['#X-Amz-Target=DirectoryService_20150416.EnableClientAuthentication'] as const
}

export function getXAmzTargetDirectoryService_20150416EnableLDAPSKey() {
  return ['#X-Amz-Target=DirectoryService_20150416.EnableLDAPS'] as const
}

export function getXAmzTargetDirectoryService_20150416EnableRadiusKey() {
  return ['#X-Amz-Target=DirectoryService_20150416.EnableRadius'] as const
}

export function getXAmzTargetDirectoryService_20150416EnableSsoKey() {
  return ['#X-Amz-Target=DirectoryService_20150416.EnableSso'] as const
}

export function getXAmzTargetDirectoryService_20150416GetDirectoryLimitsKey() {
  return ['#X-Amz-Target=DirectoryService_20150416.GetDirectoryLimits'] as const
}

export function getXAmzTargetDirectoryService_20150416GetSnapshotLimitsKey() {
  return ['#X-Amz-Target=DirectoryService_20150416.GetSnapshotLimits'] as const
}

export function getXAmzTargetDirectoryService_20150416ListCertificatesKey() {
  return ['#X-Amz-Target=DirectoryService_20150416.ListCertificates'] as const
}

export function getXAmzTargetDirectoryService_20150416ListIpRoutesKey() {
  return ['#X-Amz-Target=DirectoryService_20150416.ListIpRoutes'] as const
}

export function getXAmzTargetDirectoryService_20150416ListLogSubscriptionsKey() {
  return ['#X-Amz-Target=DirectoryService_20150416.ListLogSubscriptions'] as const
}

export function getXAmzTargetDirectoryService_20150416ListSchemaExtensionsKey() {
  return ['#X-Amz-Target=DirectoryService_20150416.ListSchemaExtensions'] as const
}

export function getXAmzTargetDirectoryService_20150416ListTagsForResourceKey() {
  return ['#X-Amz-Target=DirectoryService_20150416.ListTagsForResource'] as const
}

export function getXAmzTargetDirectoryService_20150416RegisterCertificateKey() {
  return ['#X-Amz-Target=DirectoryService_20150416.RegisterCertificate'] as const
}

export function getXAmzTargetDirectoryService_20150416RegisterEventTopicKey() {
  return ['#X-Amz-Target=DirectoryService_20150416.RegisterEventTopic'] as const
}

export function getXAmzTargetDirectoryService_20150416RejectSharedDirectoryKey() {
  return ['#X-Amz-Target=DirectoryService_20150416.RejectSharedDirectory'] as const
}

export function getXAmzTargetDirectoryService_20150416RemoveIpRoutesKey() {
  return ['#X-Amz-Target=DirectoryService_20150416.RemoveIpRoutes'] as const
}

export function getXAmzTargetDirectoryService_20150416RemoveRegionKey() {
  return ['#X-Amz-Target=DirectoryService_20150416.RemoveRegion'] as const
}

export function getXAmzTargetDirectoryService_20150416RemoveTagsFromResourceKey() {
  return ['#X-Amz-Target=DirectoryService_20150416.RemoveTagsFromResource'] as const
}

export function getXAmzTargetDirectoryService_20150416ResetUserPasswordKey() {
  return ['#X-Amz-Target=DirectoryService_20150416.ResetUserPassword'] as const
}

export function getXAmzTargetDirectoryService_20150416RestoreFromSnapshotKey() {
  return ['#X-Amz-Target=DirectoryService_20150416.RestoreFromSnapshot'] as const
}

export function getXAmzTargetDirectoryService_20150416ShareDirectoryKey() {
  return ['#X-Amz-Target=DirectoryService_20150416.ShareDirectory'] as const
}

export function getXAmzTargetDirectoryService_20150416StartSchemaExtensionKey() {
  return ['#X-Amz-Target=DirectoryService_20150416.StartSchemaExtension'] as const
}

export function getXAmzTargetDirectoryService_20150416UnshareDirectoryKey() {
  return ['#X-Amz-Target=DirectoryService_20150416.UnshareDirectory'] as const
}

export function getXAmzTargetDirectoryService_20150416UpdateConditionalForwarderKey() {
  return ['#X-Amz-Target=DirectoryService_20150416.UpdateConditionalForwarder'] as const
}

export function getXAmzTargetDirectoryService_20150416UpdateDirectorySetupKey() {
  return ['#X-Amz-Target=DirectoryService_20150416.UpdateDirectorySetup'] as const
}

export function getXAmzTargetDirectoryService_20150416UpdateNumberOfDomainControllersKey() {
  return ['#X-Amz-Target=DirectoryService_20150416.UpdateNumberOfDomainControllers'] as const
}

export function getXAmzTargetDirectoryService_20150416UpdateRadiusKey() {
  return ['#X-Amz-Target=DirectoryService_20150416.UpdateRadius'] as const
}

export function getXAmzTargetDirectoryService_20150416UpdateSettingsKey() {
  return ['#X-Amz-Target=DirectoryService_20150416.UpdateSettings'] as const
}

export function getXAmzTargetDirectoryService_20150416UpdateTrustKey() {
  return ['#X-Amz-Target=DirectoryService_20150416.UpdateTrust'] as const
}

export function getXAmzTargetDirectoryService_20150416VerifyTrustKey() {
  return ['#X-Amz-Target=DirectoryService_20150416.VerifyTrust'] as const
}

export function getPostXAmzTargetDirectoryService20150416AcceptSharedDirectoryKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.AcceptSharedDirectory',
    '/#X-Amz-Target=DirectoryService_20150416.AcceptSharedDirectory',
    'POST',
  ] as const
}

export function usePostXAmzTargetDirectoryService20150416AcceptSharedDirectory<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DirectoryService_20150416.AcceptSharedDirectory']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.AcceptSharedDirectory']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDirectoryService20150416AcceptSharedDirectoryKey()
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
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.AcceptSharedDirectory']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DirectoryService_20150416.AcceptSharedDirectory'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDirectoryService20150416AddIpRoutesKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.AddIpRoutes',
    '/#X-Amz-Target=DirectoryService_20150416.AddIpRoutes',
    'POST',
  ] as const
}

export function usePostXAmzTargetDirectoryService20150416AddIpRoutes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DirectoryService_20150416.AddIpRoutes']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.AddIpRoutes']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDirectoryService20150416AddIpRoutesKey()
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
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.AddIpRoutes']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DirectoryService_20150416.AddIpRoutes'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDirectoryService20150416AddRegionKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.AddRegion',
    '/#X-Amz-Target=DirectoryService_20150416.AddRegion',
    'POST',
  ] as const
}

export function usePostXAmzTargetDirectoryService20150416AddRegion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DirectoryService_20150416.AddRegion']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DirectoryService_20150416.AddRegion']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDirectoryService20150416AddRegionKey()
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
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.AddRegion']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DirectoryService_20150416.AddRegion'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDirectoryService20150416AddTagsToResourceKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.AddTagsToResource',
    '/#X-Amz-Target=DirectoryService_20150416.AddTagsToResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetDirectoryService20150416AddTagsToResource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DirectoryService_20150416.AddTagsToResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.AddTagsToResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDirectoryService20150416AddTagsToResourceKey()
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
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.AddTagsToResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DirectoryService_20150416.AddTagsToResource'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDirectoryService20150416CancelSchemaExtensionKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.CancelSchemaExtension',
    '/#X-Amz-Target=DirectoryService_20150416.CancelSchemaExtension',
    'POST',
  ] as const
}

export function usePostXAmzTargetDirectoryService20150416CancelSchemaExtension<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DirectoryService_20150416.CancelSchemaExtension']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.CancelSchemaExtension']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDirectoryService20150416CancelSchemaExtensionKey()
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
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.CancelSchemaExtension']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DirectoryService_20150416.CancelSchemaExtension'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDirectoryService20150416ConnectDirectoryKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.ConnectDirectory',
    '/#X-Amz-Target=DirectoryService_20150416.ConnectDirectory',
    'POST',
  ] as const
}

export function usePostXAmzTargetDirectoryService20150416ConnectDirectory<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DirectoryService_20150416.ConnectDirectory']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.ConnectDirectory']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDirectoryService20150416ConnectDirectoryKey()
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
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.ConnectDirectory']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DirectoryService_20150416.ConnectDirectory'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDirectoryService20150416CreateAliasKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.CreateAlias',
    '/#X-Amz-Target=DirectoryService_20150416.CreateAlias',
    'POST',
  ] as const
}

export function usePostXAmzTargetDirectoryService20150416CreateAlias<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DirectoryService_20150416.CreateAlias']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.CreateAlias']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDirectoryService20150416CreateAliasKey()
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
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.CreateAlias']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DirectoryService_20150416.CreateAlias'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDirectoryService20150416CreateComputerKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.CreateComputer',
    '/#X-Amz-Target=DirectoryService_20150416.CreateComputer',
    'POST',
  ] as const
}

export function usePostXAmzTargetDirectoryService20150416CreateComputer<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DirectoryService_20150416.CreateComputer']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.CreateComputer']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDirectoryService20150416CreateComputerKey()
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
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.CreateComputer']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DirectoryService_20150416.CreateComputer'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDirectoryService20150416CreateConditionalForwarderKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.CreateConditionalForwarder',
    '/#X-Amz-Target=DirectoryService_20150416.CreateConditionalForwarder',
    'POST',
  ] as const
}

export function usePostXAmzTargetDirectoryService20150416CreateConditionalForwarder<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DirectoryService_20150416.CreateConditionalForwarder']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.CreateConditionalForwarder']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetDirectoryService20150416CreateConditionalForwarderKey()
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
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.CreateConditionalForwarder']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DirectoryService_20150416.CreateConditionalForwarder'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDirectoryService20150416CreateDirectoryKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.CreateDirectory',
    '/#X-Amz-Target=DirectoryService_20150416.CreateDirectory',
    'POST',
  ] as const
}

export function usePostXAmzTargetDirectoryService20150416CreateDirectory<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DirectoryService_20150416.CreateDirectory']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.CreateDirectory']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDirectoryService20150416CreateDirectoryKey()
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
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.CreateDirectory']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DirectoryService_20150416.CreateDirectory'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDirectoryService20150416CreateLogSubscriptionKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.CreateLogSubscription',
    '/#X-Amz-Target=DirectoryService_20150416.CreateLogSubscription',
    'POST',
  ] as const
}

export function usePostXAmzTargetDirectoryService20150416CreateLogSubscription<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DirectoryService_20150416.CreateLogSubscription']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.CreateLogSubscription']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDirectoryService20150416CreateLogSubscriptionKey()
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
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.CreateLogSubscription']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DirectoryService_20150416.CreateLogSubscription'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDirectoryService20150416CreateMicrosoftADKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.CreateMicrosoftAD',
    '/#X-Amz-Target=DirectoryService_20150416.CreateMicrosoftAD',
    'POST',
  ] as const
}

export function usePostXAmzTargetDirectoryService20150416CreateMicrosoftAD<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DirectoryService_20150416.CreateMicrosoftAD']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.CreateMicrosoftAD']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDirectoryService20150416CreateMicrosoftADKey()
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
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.CreateMicrosoftAD']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DirectoryService_20150416.CreateMicrosoftAD'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDirectoryService20150416CreateSnapshotKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.CreateSnapshot',
    '/#X-Amz-Target=DirectoryService_20150416.CreateSnapshot',
    'POST',
  ] as const
}

export function usePostXAmzTargetDirectoryService20150416CreateSnapshot<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DirectoryService_20150416.CreateSnapshot']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.CreateSnapshot']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDirectoryService20150416CreateSnapshotKey()
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
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.CreateSnapshot']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DirectoryService_20150416.CreateSnapshot'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDirectoryService20150416CreateTrustKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.CreateTrust',
    '/#X-Amz-Target=DirectoryService_20150416.CreateTrust',
    'POST',
  ] as const
}

export function usePostXAmzTargetDirectoryService20150416CreateTrust<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DirectoryService_20150416.CreateTrust']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.CreateTrust']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDirectoryService20150416CreateTrustKey()
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
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.CreateTrust']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DirectoryService_20150416.CreateTrust'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDirectoryService20150416DeleteConditionalForwarderKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.DeleteConditionalForwarder',
    '/#X-Amz-Target=DirectoryService_20150416.DeleteConditionalForwarder',
    'POST',
  ] as const
}

export function usePostXAmzTargetDirectoryService20150416DeleteConditionalForwarder<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DirectoryService_20150416.DeleteConditionalForwarder']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.DeleteConditionalForwarder']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetDirectoryService20150416DeleteConditionalForwarderKey()
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
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.DeleteConditionalForwarder']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DirectoryService_20150416.DeleteConditionalForwarder'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDirectoryService20150416DeleteDirectoryKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.DeleteDirectory',
    '/#X-Amz-Target=DirectoryService_20150416.DeleteDirectory',
    'POST',
  ] as const
}

export function usePostXAmzTargetDirectoryService20150416DeleteDirectory<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DirectoryService_20150416.DeleteDirectory']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.DeleteDirectory']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDirectoryService20150416DeleteDirectoryKey()
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
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.DeleteDirectory']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DirectoryService_20150416.DeleteDirectory'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDirectoryService20150416DeleteLogSubscriptionKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.DeleteLogSubscription',
    '/#X-Amz-Target=DirectoryService_20150416.DeleteLogSubscription',
    'POST',
  ] as const
}

export function usePostXAmzTargetDirectoryService20150416DeleteLogSubscription<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DirectoryService_20150416.DeleteLogSubscription']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.DeleteLogSubscription']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDirectoryService20150416DeleteLogSubscriptionKey()
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
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.DeleteLogSubscription']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DirectoryService_20150416.DeleteLogSubscription'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDirectoryService20150416DeleteSnapshotKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.DeleteSnapshot',
    '/#X-Amz-Target=DirectoryService_20150416.DeleteSnapshot',
    'POST',
  ] as const
}

export function usePostXAmzTargetDirectoryService20150416DeleteSnapshot<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DirectoryService_20150416.DeleteSnapshot']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.DeleteSnapshot']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDirectoryService20150416DeleteSnapshotKey()
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
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.DeleteSnapshot']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DirectoryService_20150416.DeleteSnapshot'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDirectoryService20150416DeleteTrustKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.DeleteTrust',
    '/#X-Amz-Target=DirectoryService_20150416.DeleteTrust',
    'POST',
  ] as const
}

export function usePostXAmzTargetDirectoryService20150416DeleteTrust<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DirectoryService_20150416.DeleteTrust']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.DeleteTrust']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDirectoryService20150416DeleteTrustKey()
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
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.DeleteTrust']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DirectoryService_20150416.DeleteTrust'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDirectoryService20150416DeregisterCertificateKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.DeregisterCertificate',
    '/#X-Amz-Target=DirectoryService_20150416.DeregisterCertificate',
    'POST',
  ] as const
}

export function usePostXAmzTargetDirectoryService20150416DeregisterCertificate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DirectoryService_20150416.DeregisterCertificate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.DeregisterCertificate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDirectoryService20150416DeregisterCertificateKey()
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
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.DeregisterCertificate']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DirectoryService_20150416.DeregisterCertificate'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDirectoryService20150416DeregisterEventTopicKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.DeregisterEventTopic',
    '/#X-Amz-Target=DirectoryService_20150416.DeregisterEventTopic',
    'POST',
  ] as const
}

export function usePostXAmzTargetDirectoryService20150416DeregisterEventTopic<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DirectoryService_20150416.DeregisterEventTopic']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.DeregisterEventTopic']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDirectoryService20150416DeregisterEventTopicKey()
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
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.DeregisterEventTopic']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DirectoryService_20150416.DeregisterEventTopic'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDirectoryService20150416DescribeCertificateKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.DescribeCertificate',
    '/#X-Amz-Target=DirectoryService_20150416.DescribeCertificate',
    'POST',
  ] as const
}

export function usePostXAmzTargetDirectoryService20150416DescribeCertificate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeCertificate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeCertificate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDirectoryService20150416DescribeCertificateKey()
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
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeCertificate']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DirectoryService_20150416.DescribeCertificate'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDirectoryService20150416DescribeClientAuthenticationSettingsKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.DescribeClientAuthenticationSettings',
    '/#X-Amz-Target=DirectoryService_20150416.DescribeClientAuthenticationSettings',
    'POST',
  ] as const
}

export function usePostXAmzTargetDirectoryService20150416DescribeClientAuthenticationSettings<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeClientAuthenticationSettings']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeClientAuthenticationSettings']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetDirectoryService20150416DescribeClientAuthenticationSettingsKey()
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
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeClientAuthenticationSettings']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=DirectoryService_20150416.DescribeClientAuthenticationSettings'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDirectoryService20150416DescribeConditionalForwardersKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.DescribeConditionalForwarders',
    '/#X-Amz-Target=DirectoryService_20150416.DescribeConditionalForwarders',
    'POST',
  ] as const
}

export function usePostXAmzTargetDirectoryService20150416DescribeConditionalForwarders<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeConditionalForwarders']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeConditionalForwarders']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetDirectoryService20150416DescribeConditionalForwardersKey()
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
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeConditionalForwarders']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DirectoryService_20150416.DescribeConditionalForwarders'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDirectoryService20150416DescribeDirectoriesKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.DescribeDirectories',
    '/#X-Amz-Target=DirectoryService_20150416.DescribeDirectories',
    'POST',
  ] as const
}

export function usePostXAmzTargetDirectoryService20150416DescribeDirectories<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeDirectories']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeDirectories']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDirectoryService20150416DescribeDirectoriesKey()
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
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeDirectories']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DirectoryService_20150416.DescribeDirectories'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDirectoryService20150416DescribeDomainControllersKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.DescribeDomainControllers',
    '/#X-Amz-Target=DirectoryService_20150416.DescribeDomainControllers',
    'POST',
  ] as const
}

export function usePostXAmzTargetDirectoryService20150416DescribeDomainControllers<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeDomainControllers']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeDomainControllers']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetDirectoryService20150416DescribeDomainControllersKey()
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
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeDomainControllers']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DirectoryService_20150416.DescribeDomainControllers'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDirectoryService20150416DescribeEventTopicsKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.DescribeEventTopics',
    '/#X-Amz-Target=DirectoryService_20150416.DescribeEventTopics',
    'POST',
  ] as const
}

export function usePostXAmzTargetDirectoryService20150416DescribeEventTopics<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeEventTopics']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeEventTopics']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDirectoryService20150416DescribeEventTopicsKey()
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
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeEventTopics']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DirectoryService_20150416.DescribeEventTopics'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDirectoryService20150416DescribeLDAPSSettingsKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.DescribeLDAPSSettings',
    '/#X-Amz-Target=DirectoryService_20150416.DescribeLDAPSSettings',
    'POST',
  ] as const
}

export function usePostXAmzTargetDirectoryService20150416DescribeLDAPSSettings<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeLDAPSSettings']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeLDAPSSettings']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDirectoryService20150416DescribeLDAPSSettingsKey()
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
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeLDAPSSettings']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DirectoryService_20150416.DescribeLDAPSSettings'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDirectoryService20150416DescribeRegionsKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.DescribeRegions',
    '/#X-Amz-Target=DirectoryService_20150416.DescribeRegions',
    'POST',
  ] as const
}

export function usePostXAmzTargetDirectoryService20150416DescribeRegions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeRegions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeRegions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDirectoryService20150416DescribeRegionsKey()
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
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeRegions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DirectoryService_20150416.DescribeRegions'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDirectoryService20150416DescribeSettingsKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.DescribeSettings',
    '/#X-Amz-Target=DirectoryService_20150416.DescribeSettings',
    'POST',
  ] as const
}

export function usePostXAmzTargetDirectoryService20150416DescribeSettings<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeSettings']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeSettings']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDirectoryService20150416DescribeSettingsKey()
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
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeSettings']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DirectoryService_20150416.DescribeSettings'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDirectoryService20150416DescribeSharedDirectoriesKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.DescribeSharedDirectories',
    '/#X-Amz-Target=DirectoryService_20150416.DescribeSharedDirectories',
    'POST',
  ] as const
}

export function usePostXAmzTargetDirectoryService20150416DescribeSharedDirectories<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeSharedDirectories']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeSharedDirectories']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetDirectoryService20150416DescribeSharedDirectoriesKey()
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
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeSharedDirectories']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DirectoryService_20150416.DescribeSharedDirectories'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDirectoryService20150416DescribeSnapshotsKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.DescribeSnapshots',
    '/#X-Amz-Target=DirectoryService_20150416.DescribeSnapshots',
    'POST',
  ] as const
}

export function usePostXAmzTargetDirectoryService20150416DescribeSnapshots<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeSnapshots']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeSnapshots']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDirectoryService20150416DescribeSnapshotsKey()
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
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeSnapshots']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DirectoryService_20150416.DescribeSnapshots'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDirectoryService20150416DescribeTrustsKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.DescribeTrusts',
    '/#X-Amz-Target=DirectoryService_20150416.DescribeTrusts',
    'POST',
  ] as const
}

export function usePostXAmzTargetDirectoryService20150416DescribeTrusts<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeTrusts']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeTrusts']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDirectoryService20150416DescribeTrustsKey()
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
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeTrusts']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DirectoryService_20150416.DescribeTrusts'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDirectoryService20150416DescribeUpdateDirectoryKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.DescribeUpdateDirectory',
    '/#X-Amz-Target=DirectoryService_20150416.DescribeUpdateDirectory',
    'POST',
  ] as const
}

export function usePostXAmzTargetDirectoryService20150416DescribeUpdateDirectory<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeUpdateDirectory']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeUpdateDirectory']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDirectoryService20150416DescribeUpdateDirectoryKey()
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
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeUpdateDirectory']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DirectoryService_20150416.DescribeUpdateDirectory'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDirectoryService20150416DisableClientAuthenticationKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.DisableClientAuthentication',
    '/#X-Amz-Target=DirectoryService_20150416.DisableClientAuthentication',
    'POST',
  ] as const
}

export function usePostXAmzTargetDirectoryService20150416DisableClientAuthentication<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DirectoryService_20150416.DisableClientAuthentication']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.DisableClientAuthentication']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetDirectoryService20150416DisableClientAuthenticationKey()
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
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.DisableClientAuthentication']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DirectoryService_20150416.DisableClientAuthentication'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDirectoryService20150416DisableLDAPSKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.DisableLDAPS',
    '/#X-Amz-Target=DirectoryService_20150416.DisableLDAPS',
    'POST',
  ] as const
}

export function usePostXAmzTargetDirectoryService20150416DisableLDAPS<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DirectoryService_20150416.DisableLDAPS']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.DisableLDAPS']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDirectoryService20150416DisableLDAPSKey()
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
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.DisableLDAPS']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DirectoryService_20150416.DisableLDAPS'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDirectoryService20150416DisableRadiusKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.DisableRadius',
    '/#X-Amz-Target=DirectoryService_20150416.DisableRadius',
    'POST',
  ] as const
}

export function usePostXAmzTargetDirectoryService20150416DisableRadius<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DirectoryService_20150416.DisableRadius']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.DisableRadius']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDirectoryService20150416DisableRadiusKey()
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
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.DisableRadius']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DirectoryService_20150416.DisableRadius'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDirectoryService20150416DisableSsoKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.DisableSso',
    '/#X-Amz-Target=DirectoryService_20150416.DisableSso',
    'POST',
  ] as const
}

export function usePostXAmzTargetDirectoryService20150416DisableSso<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DirectoryService_20150416.DisableSso']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DirectoryService_20150416.DisableSso']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDirectoryService20150416DisableSsoKey()
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
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.DisableSso']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DirectoryService_20150416.DisableSso'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDirectoryService20150416EnableClientAuthenticationKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.EnableClientAuthentication',
    '/#X-Amz-Target=DirectoryService_20150416.EnableClientAuthentication',
    'POST',
  ] as const
}

export function usePostXAmzTargetDirectoryService20150416EnableClientAuthentication<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DirectoryService_20150416.EnableClientAuthentication']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.EnableClientAuthentication']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetDirectoryService20150416EnableClientAuthenticationKey()
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
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.EnableClientAuthentication']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DirectoryService_20150416.EnableClientAuthentication'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDirectoryService20150416EnableLDAPSKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.EnableLDAPS',
    '/#X-Amz-Target=DirectoryService_20150416.EnableLDAPS',
    'POST',
  ] as const
}

export function usePostXAmzTargetDirectoryService20150416EnableLDAPS<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DirectoryService_20150416.EnableLDAPS']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.EnableLDAPS']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDirectoryService20150416EnableLDAPSKey()
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
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.EnableLDAPS']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DirectoryService_20150416.EnableLDAPS'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDirectoryService20150416EnableRadiusKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.EnableRadius',
    '/#X-Amz-Target=DirectoryService_20150416.EnableRadius',
    'POST',
  ] as const
}

export function usePostXAmzTargetDirectoryService20150416EnableRadius<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DirectoryService_20150416.EnableRadius']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.EnableRadius']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDirectoryService20150416EnableRadiusKey()
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
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.EnableRadius']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DirectoryService_20150416.EnableRadius'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDirectoryService20150416EnableSsoKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.EnableSso',
    '/#X-Amz-Target=DirectoryService_20150416.EnableSso',
    'POST',
  ] as const
}

export function usePostXAmzTargetDirectoryService20150416EnableSso<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DirectoryService_20150416.EnableSso']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DirectoryService_20150416.EnableSso']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDirectoryService20150416EnableSsoKey()
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
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.EnableSso']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DirectoryService_20150416.EnableSso'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDirectoryService20150416GetDirectoryLimitsKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.GetDirectoryLimits',
    '/#X-Amz-Target=DirectoryService_20150416.GetDirectoryLimits',
    'POST',
  ] as const
}

export function usePostXAmzTargetDirectoryService20150416GetDirectoryLimits<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DirectoryService_20150416.GetDirectoryLimits']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.GetDirectoryLimits']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDirectoryService20150416GetDirectoryLimitsKey()
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
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.GetDirectoryLimits']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DirectoryService_20150416.GetDirectoryLimits'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDirectoryService20150416GetSnapshotLimitsKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.GetSnapshotLimits',
    '/#X-Amz-Target=DirectoryService_20150416.GetSnapshotLimits',
    'POST',
  ] as const
}

export function usePostXAmzTargetDirectoryService20150416GetSnapshotLimits<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DirectoryService_20150416.GetSnapshotLimits']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.GetSnapshotLimits']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDirectoryService20150416GetSnapshotLimitsKey()
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
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.GetSnapshotLimits']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DirectoryService_20150416.GetSnapshotLimits'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDirectoryService20150416ListCertificatesKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.ListCertificates',
    '/#X-Amz-Target=DirectoryService_20150416.ListCertificates',
    'POST',
  ] as const
}

export function usePostXAmzTargetDirectoryService20150416ListCertificates<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DirectoryService_20150416.ListCertificates']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.ListCertificates']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDirectoryService20150416ListCertificatesKey()
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
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.ListCertificates']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DirectoryService_20150416.ListCertificates'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDirectoryService20150416ListIpRoutesKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.ListIpRoutes',
    '/#X-Amz-Target=DirectoryService_20150416.ListIpRoutes',
    'POST',
  ] as const
}

export function usePostXAmzTargetDirectoryService20150416ListIpRoutes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DirectoryService_20150416.ListIpRoutes']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.ListIpRoutes']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDirectoryService20150416ListIpRoutesKey()
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
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.ListIpRoutes']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DirectoryService_20150416.ListIpRoutes'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDirectoryService20150416ListLogSubscriptionsKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.ListLogSubscriptions',
    '/#X-Amz-Target=DirectoryService_20150416.ListLogSubscriptions',
    'POST',
  ] as const
}

export function usePostXAmzTargetDirectoryService20150416ListLogSubscriptions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DirectoryService_20150416.ListLogSubscriptions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.ListLogSubscriptions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDirectoryService20150416ListLogSubscriptionsKey()
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
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.ListLogSubscriptions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DirectoryService_20150416.ListLogSubscriptions'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDirectoryService20150416ListSchemaExtensionsKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.ListSchemaExtensions',
    '/#X-Amz-Target=DirectoryService_20150416.ListSchemaExtensions',
    'POST',
  ] as const
}

export function usePostXAmzTargetDirectoryService20150416ListSchemaExtensions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DirectoryService_20150416.ListSchemaExtensions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.ListSchemaExtensions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDirectoryService20150416ListSchemaExtensionsKey()
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
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.ListSchemaExtensions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DirectoryService_20150416.ListSchemaExtensions'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDirectoryService20150416ListTagsForResourceKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.ListTagsForResource',
    '/#X-Amz-Target=DirectoryService_20150416.ListTagsForResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetDirectoryService20150416ListTagsForResource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DirectoryService_20150416.ListTagsForResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.ListTagsForResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDirectoryService20150416ListTagsForResourceKey()
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
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.ListTagsForResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DirectoryService_20150416.ListTagsForResource'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDirectoryService20150416RegisterCertificateKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.RegisterCertificate',
    '/#X-Amz-Target=DirectoryService_20150416.RegisterCertificate',
    'POST',
  ] as const
}

export function usePostXAmzTargetDirectoryService20150416RegisterCertificate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DirectoryService_20150416.RegisterCertificate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.RegisterCertificate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDirectoryService20150416RegisterCertificateKey()
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
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.RegisterCertificate']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DirectoryService_20150416.RegisterCertificate'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDirectoryService20150416RegisterEventTopicKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.RegisterEventTopic',
    '/#X-Amz-Target=DirectoryService_20150416.RegisterEventTopic',
    'POST',
  ] as const
}

export function usePostXAmzTargetDirectoryService20150416RegisterEventTopic<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DirectoryService_20150416.RegisterEventTopic']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.RegisterEventTopic']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDirectoryService20150416RegisterEventTopicKey()
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
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.RegisterEventTopic']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DirectoryService_20150416.RegisterEventTopic'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDirectoryService20150416RejectSharedDirectoryKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.RejectSharedDirectory',
    '/#X-Amz-Target=DirectoryService_20150416.RejectSharedDirectory',
    'POST',
  ] as const
}

export function usePostXAmzTargetDirectoryService20150416RejectSharedDirectory<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DirectoryService_20150416.RejectSharedDirectory']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.RejectSharedDirectory']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDirectoryService20150416RejectSharedDirectoryKey()
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
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.RejectSharedDirectory']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DirectoryService_20150416.RejectSharedDirectory'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDirectoryService20150416RemoveIpRoutesKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.RemoveIpRoutes',
    '/#X-Amz-Target=DirectoryService_20150416.RemoveIpRoutes',
    'POST',
  ] as const
}

export function usePostXAmzTargetDirectoryService20150416RemoveIpRoutes<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DirectoryService_20150416.RemoveIpRoutes']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.RemoveIpRoutes']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDirectoryService20150416RemoveIpRoutesKey()
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
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.RemoveIpRoutes']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DirectoryService_20150416.RemoveIpRoutes'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDirectoryService20150416RemoveRegionKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.RemoveRegion',
    '/#X-Amz-Target=DirectoryService_20150416.RemoveRegion',
    'POST',
  ] as const
}

export function usePostXAmzTargetDirectoryService20150416RemoveRegion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DirectoryService_20150416.RemoveRegion']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.RemoveRegion']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDirectoryService20150416RemoveRegionKey()
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
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.RemoveRegion']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DirectoryService_20150416.RemoveRegion'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDirectoryService20150416RemoveTagsFromResourceKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.RemoveTagsFromResource',
    '/#X-Amz-Target=DirectoryService_20150416.RemoveTagsFromResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetDirectoryService20150416RemoveTagsFromResource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DirectoryService_20150416.RemoveTagsFromResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.RemoveTagsFromResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDirectoryService20150416RemoveTagsFromResourceKey()
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
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.RemoveTagsFromResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DirectoryService_20150416.RemoveTagsFromResource'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDirectoryService20150416ResetUserPasswordKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.ResetUserPassword',
    '/#X-Amz-Target=DirectoryService_20150416.ResetUserPassword',
    'POST',
  ] as const
}

export function usePostXAmzTargetDirectoryService20150416ResetUserPassword<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DirectoryService_20150416.ResetUserPassword']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.ResetUserPassword']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDirectoryService20150416ResetUserPasswordKey()
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
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.ResetUserPassword']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DirectoryService_20150416.ResetUserPassword'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDirectoryService20150416RestoreFromSnapshotKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.RestoreFromSnapshot',
    '/#X-Amz-Target=DirectoryService_20150416.RestoreFromSnapshot',
    'POST',
  ] as const
}

export function usePostXAmzTargetDirectoryService20150416RestoreFromSnapshot<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DirectoryService_20150416.RestoreFromSnapshot']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.RestoreFromSnapshot']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDirectoryService20150416RestoreFromSnapshotKey()
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
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.RestoreFromSnapshot']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DirectoryService_20150416.RestoreFromSnapshot'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDirectoryService20150416ShareDirectoryKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.ShareDirectory',
    '/#X-Amz-Target=DirectoryService_20150416.ShareDirectory',
    'POST',
  ] as const
}

export function usePostXAmzTargetDirectoryService20150416ShareDirectory<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DirectoryService_20150416.ShareDirectory']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.ShareDirectory']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDirectoryService20150416ShareDirectoryKey()
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
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.ShareDirectory']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DirectoryService_20150416.ShareDirectory'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDirectoryService20150416StartSchemaExtensionKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.StartSchemaExtension',
    '/#X-Amz-Target=DirectoryService_20150416.StartSchemaExtension',
    'POST',
  ] as const
}

export function usePostXAmzTargetDirectoryService20150416StartSchemaExtension<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DirectoryService_20150416.StartSchemaExtension']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.StartSchemaExtension']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDirectoryService20150416StartSchemaExtensionKey()
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
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.StartSchemaExtension']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DirectoryService_20150416.StartSchemaExtension'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDirectoryService20150416UnshareDirectoryKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.UnshareDirectory',
    '/#X-Amz-Target=DirectoryService_20150416.UnshareDirectory',
    'POST',
  ] as const
}

export function usePostXAmzTargetDirectoryService20150416UnshareDirectory<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DirectoryService_20150416.UnshareDirectory']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.UnshareDirectory']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDirectoryService20150416UnshareDirectoryKey()
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
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.UnshareDirectory']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DirectoryService_20150416.UnshareDirectory'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDirectoryService20150416UpdateConditionalForwarderKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.UpdateConditionalForwarder',
    '/#X-Amz-Target=DirectoryService_20150416.UpdateConditionalForwarder',
    'POST',
  ] as const
}

export function usePostXAmzTargetDirectoryService20150416UpdateConditionalForwarder<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DirectoryService_20150416.UpdateConditionalForwarder']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.UpdateConditionalForwarder']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetDirectoryService20150416UpdateConditionalForwarderKey()
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
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.UpdateConditionalForwarder']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DirectoryService_20150416.UpdateConditionalForwarder'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDirectoryService20150416UpdateDirectorySetupKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.UpdateDirectorySetup',
    '/#X-Amz-Target=DirectoryService_20150416.UpdateDirectorySetup',
    'POST',
  ] as const
}

export function usePostXAmzTargetDirectoryService20150416UpdateDirectorySetup<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DirectoryService_20150416.UpdateDirectorySetup']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.UpdateDirectorySetup']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDirectoryService20150416UpdateDirectorySetupKey()
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
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.UpdateDirectorySetup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DirectoryService_20150416.UpdateDirectorySetup'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDirectoryService20150416UpdateNumberOfDomainControllersKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.UpdateNumberOfDomainControllers',
    '/#X-Amz-Target=DirectoryService_20150416.UpdateNumberOfDomainControllers',
    'POST',
  ] as const
}

export function usePostXAmzTargetDirectoryService20150416UpdateNumberOfDomainControllers<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DirectoryService_20150416.UpdateNumberOfDomainControllers']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.UpdateNumberOfDomainControllers']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetDirectoryService20150416UpdateNumberOfDomainControllersKey()
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
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.UpdateNumberOfDomainControllers']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DirectoryService_20150416.UpdateNumberOfDomainControllers'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDirectoryService20150416UpdateRadiusKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.UpdateRadius',
    '/#X-Amz-Target=DirectoryService_20150416.UpdateRadius',
    'POST',
  ] as const
}

export function usePostXAmzTargetDirectoryService20150416UpdateRadius<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DirectoryService_20150416.UpdateRadius']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.UpdateRadius']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDirectoryService20150416UpdateRadiusKey()
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
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.UpdateRadius']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DirectoryService_20150416.UpdateRadius'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDirectoryService20150416UpdateSettingsKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.UpdateSettings',
    '/#X-Amz-Target=DirectoryService_20150416.UpdateSettings',
    'POST',
  ] as const
}

export function usePostXAmzTargetDirectoryService20150416UpdateSettings<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DirectoryService_20150416.UpdateSettings']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.UpdateSettings']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDirectoryService20150416UpdateSettingsKey()
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
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.UpdateSettings']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DirectoryService_20150416.UpdateSettings'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDirectoryService20150416UpdateTrustKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.UpdateTrust',
    '/#X-Amz-Target=DirectoryService_20150416.UpdateTrust',
    'POST',
  ] as const
}

export function usePostXAmzTargetDirectoryService20150416UpdateTrust<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DirectoryService_20150416.UpdateTrust']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.UpdateTrust']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDirectoryService20150416UpdateTrustKey()
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
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.UpdateTrust']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DirectoryService_20150416.UpdateTrust'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDirectoryService20150416VerifyTrustKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.VerifyTrust',
    '/#X-Amz-Target=DirectoryService_20150416.VerifyTrust',
    'POST',
  ] as const
}

export function usePostXAmzTargetDirectoryService20150416VerifyTrust<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DirectoryService_20150416.VerifyTrust']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.VerifyTrust']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDirectoryService20150416VerifyTrustKey()
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
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.VerifyTrust']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DirectoryService_20150416.VerifyTrust'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
