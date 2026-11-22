import { useMutation, mutationOptions } from '@tanstack/vue-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/vue-query'
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

export function getPostXAmzTargetDirectoryService20150416AcceptSharedDirectoryMutationKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.AcceptSharedDirectory',
    '/#X-Amz-Target=DirectoryService_20150416.AcceptSharedDirectory',
    'POST',
  ] as const
}

export function getPostXAmzTargetDirectoryService20150416AcceptSharedDirectoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.AcceptSharedDirectory']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDirectoryService20150416AcceptSharedDirectoryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DirectoryService_20150416.AcceptSharedDirectory']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DirectoryService_20150416.AcceptSharedDirectory'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetDirectoryService20150416AcceptSharedDirectory<
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
                    (typeof client)['#X-Amz-Target=DirectoryService_20150416.AcceptSharedDirectory']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.AcceptSharedDirectory']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetDirectoryService20150416AcceptSharedDirectoryMutationOptions<
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

export function getPostXAmzTargetDirectoryService20150416AddIpRoutesMutationKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.AddIpRoutes',
    '/#X-Amz-Target=DirectoryService_20150416.AddIpRoutes',
    'POST',
  ] as const
}

export function getPostXAmzTargetDirectoryService20150416AddIpRoutesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.AddIpRoutes']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDirectoryService20150416AddIpRoutesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DirectoryService_20150416.AddIpRoutes']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DirectoryService_20150416.AddIpRoutes'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetDirectoryService20150416AddIpRoutes<
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
                    (typeof client)['#X-Amz-Target=DirectoryService_20150416.AddIpRoutes']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.AddIpRoutes']['$post']
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
  const mutationDefaults = getPostXAmzTargetDirectoryService20150416AddIpRoutesMutationOptions<
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

export function getPostXAmzTargetDirectoryService20150416AddRegionMutationKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.AddRegion',
    '/#X-Amz-Target=DirectoryService_20150416.AddRegion',
    'POST',
  ] as const
}

export function getPostXAmzTargetDirectoryService20150416AddRegionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=DirectoryService_20150416.AddRegion']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDirectoryService20150416AddRegionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DirectoryService_20150416.AddRegion']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DirectoryService_20150416.AddRegion'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetDirectoryService20150416AddRegion<
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
                    (typeof client)['#X-Amz-Target=DirectoryService_20150416.AddRegion']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.AddRegion']['$post']
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
  const mutationDefaults = getPostXAmzTargetDirectoryService20150416AddRegionMutationOptions<
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

export function getPostXAmzTargetDirectoryService20150416AddTagsToResourceMutationKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.AddTagsToResource',
    '/#X-Amz-Target=DirectoryService_20150416.AddTagsToResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetDirectoryService20150416AddTagsToResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.AddTagsToResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDirectoryService20150416AddTagsToResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DirectoryService_20150416.AddTagsToResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DirectoryService_20150416.AddTagsToResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetDirectoryService20150416AddTagsToResource<
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
                    (typeof client)['#X-Amz-Target=DirectoryService_20150416.AddTagsToResource']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.AddTagsToResource']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetDirectoryService20150416AddTagsToResourceMutationOptions<
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

export function getPostXAmzTargetDirectoryService20150416CancelSchemaExtensionMutationKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.CancelSchemaExtension',
    '/#X-Amz-Target=DirectoryService_20150416.CancelSchemaExtension',
    'POST',
  ] as const
}

export function getPostXAmzTargetDirectoryService20150416CancelSchemaExtensionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.CancelSchemaExtension']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDirectoryService20150416CancelSchemaExtensionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DirectoryService_20150416.CancelSchemaExtension']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DirectoryService_20150416.CancelSchemaExtension'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetDirectoryService20150416CancelSchemaExtension<
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
                    (typeof client)['#X-Amz-Target=DirectoryService_20150416.CancelSchemaExtension']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.CancelSchemaExtension']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetDirectoryService20150416CancelSchemaExtensionMutationOptions<
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

export function getPostXAmzTargetDirectoryService20150416ConnectDirectoryMutationKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.ConnectDirectory',
    '/#X-Amz-Target=DirectoryService_20150416.ConnectDirectory',
    'POST',
  ] as const
}

export function getPostXAmzTargetDirectoryService20150416ConnectDirectoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.ConnectDirectory']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDirectoryService20150416ConnectDirectoryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DirectoryService_20150416.ConnectDirectory']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DirectoryService_20150416.ConnectDirectory'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetDirectoryService20150416ConnectDirectory<
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
                    (typeof client)['#X-Amz-Target=DirectoryService_20150416.ConnectDirectory']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.ConnectDirectory']['$post']
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
  const mutationDefaults = getPostXAmzTargetDirectoryService20150416ConnectDirectoryMutationOptions<
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

export function getPostXAmzTargetDirectoryService20150416CreateAliasMutationKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.CreateAlias',
    '/#X-Amz-Target=DirectoryService_20150416.CreateAlias',
    'POST',
  ] as const
}

export function getPostXAmzTargetDirectoryService20150416CreateAliasMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.CreateAlias']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDirectoryService20150416CreateAliasMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DirectoryService_20150416.CreateAlias']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DirectoryService_20150416.CreateAlias'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetDirectoryService20150416CreateAlias<
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
                    (typeof client)['#X-Amz-Target=DirectoryService_20150416.CreateAlias']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.CreateAlias']['$post']
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
  const mutationDefaults = getPostXAmzTargetDirectoryService20150416CreateAliasMutationOptions<
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

export function getPostXAmzTargetDirectoryService20150416CreateComputerMutationKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.CreateComputer',
    '/#X-Amz-Target=DirectoryService_20150416.CreateComputer',
    'POST',
  ] as const
}

export function getPostXAmzTargetDirectoryService20150416CreateComputerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.CreateComputer']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDirectoryService20150416CreateComputerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DirectoryService_20150416.CreateComputer']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DirectoryService_20150416.CreateComputer'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetDirectoryService20150416CreateComputer<
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
                    (typeof client)['#X-Amz-Target=DirectoryService_20150416.CreateComputer']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.CreateComputer']['$post']
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
  const mutationDefaults = getPostXAmzTargetDirectoryService20150416CreateComputerMutationOptions<
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

export function getPostXAmzTargetDirectoryService20150416CreateConditionalForwarderMutationKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.CreateConditionalForwarder',
    '/#X-Amz-Target=DirectoryService_20150416.CreateConditionalForwarder',
    'POST',
  ] as const
}

export function getPostXAmzTargetDirectoryService20150416CreateConditionalForwarderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.CreateConditionalForwarder']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDirectoryService20150416CreateConditionalForwarderMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DirectoryService_20150416.CreateConditionalForwarder']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DirectoryService_20150416.CreateConditionalForwarder'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetDirectoryService20150416CreateConditionalForwarder<
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
                    (typeof client)['#X-Amz-Target=DirectoryService_20150416.CreateConditionalForwarder']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.CreateConditionalForwarder']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetDirectoryService20150416CreateConditionalForwarderMutationOptions<
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

export function getPostXAmzTargetDirectoryService20150416CreateDirectoryMutationKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.CreateDirectory',
    '/#X-Amz-Target=DirectoryService_20150416.CreateDirectory',
    'POST',
  ] as const
}

export function getPostXAmzTargetDirectoryService20150416CreateDirectoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.CreateDirectory']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDirectoryService20150416CreateDirectoryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DirectoryService_20150416.CreateDirectory']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DirectoryService_20150416.CreateDirectory'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetDirectoryService20150416CreateDirectory<
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
                    (typeof client)['#X-Amz-Target=DirectoryService_20150416.CreateDirectory']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.CreateDirectory']['$post']
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
  const mutationDefaults = getPostXAmzTargetDirectoryService20150416CreateDirectoryMutationOptions<
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

export function getPostXAmzTargetDirectoryService20150416CreateLogSubscriptionMutationKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.CreateLogSubscription',
    '/#X-Amz-Target=DirectoryService_20150416.CreateLogSubscription',
    'POST',
  ] as const
}

export function getPostXAmzTargetDirectoryService20150416CreateLogSubscriptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.CreateLogSubscription']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDirectoryService20150416CreateLogSubscriptionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DirectoryService_20150416.CreateLogSubscription']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DirectoryService_20150416.CreateLogSubscription'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetDirectoryService20150416CreateLogSubscription<
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
                    (typeof client)['#X-Amz-Target=DirectoryService_20150416.CreateLogSubscription']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.CreateLogSubscription']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetDirectoryService20150416CreateLogSubscriptionMutationOptions<
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

export function getPostXAmzTargetDirectoryService20150416CreateMicrosoftADMutationKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.CreateMicrosoftAD',
    '/#X-Amz-Target=DirectoryService_20150416.CreateMicrosoftAD',
    'POST',
  ] as const
}

export function getPostXAmzTargetDirectoryService20150416CreateMicrosoftADMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.CreateMicrosoftAD']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDirectoryService20150416CreateMicrosoftADMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DirectoryService_20150416.CreateMicrosoftAD']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DirectoryService_20150416.CreateMicrosoftAD'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetDirectoryService20150416CreateMicrosoftAD<
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
                    (typeof client)['#X-Amz-Target=DirectoryService_20150416.CreateMicrosoftAD']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.CreateMicrosoftAD']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetDirectoryService20150416CreateMicrosoftADMutationOptions<
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

export function getPostXAmzTargetDirectoryService20150416CreateSnapshotMutationKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.CreateSnapshot',
    '/#X-Amz-Target=DirectoryService_20150416.CreateSnapshot',
    'POST',
  ] as const
}

export function getPostXAmzTargetDirectoryService20150416CreateSnapshotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.CreateSnapshot']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDirectoryService20150416CreateSnapshotMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DirectoryService_20150416.CreateSnapshot']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DirectoryService_20150416.CreateSnapshot'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetDirectoryService20150416CreateSnapshot<
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
                    (typeof client)['#X-Amz-Target=DirectoryService_20150416.CreateSnapshot']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.CreateSnapshot']['$post']
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
  const mutationDefaults = getPostXAmzTargetDirectoryService20150416CreateSnapshotMutationOptions<
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

export function getPostXAmzTargetDirectoryService20150416CreateTrustMutationKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.CreateTrust',
    '/#X-Amz-Target=DirectoryService_20150416.CreateTrust',
    'POST',
  ] as const
}

export function getPostXAmzTargetDirectoryService20150416CreateTrustMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.CreateTrust']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDirectoryService20150416CreateTrustMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DirectoryService_20150416.CreateTrust']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DirectoryService_20150416.CreateTrust'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetDirectoryService20150416CreateTrust<
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
                    (typeof client)['#X-Amz-Target=DirectoryService_20150416.CreateTrust']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.CreateTrust']['$post']
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
  const mutationDefaults = getPostXAmzTargetDirectoryService20150416CreateTrustMutationOptions<
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

export function getPostXAmzTargetDirectoryService20150416DeleteConditionalForwarderMutationKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.DeleteConditionalForwarder',
    '/#X-Amz-Target=DirectoryService_20150416.DeleteConditionalForwarder',
    'POST',
  ] as const
}

export function getPostXAmzTargetDirectoryService20150416DeleteConditionalForwarderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.DeleteConditionalForwarder']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDirectoryService20150416DeleteConditionalForwarderMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DirectoryService_20150416.DeleteConditionalForwarder']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DirectoryService_20150416.DeleteConditionalForwarder'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetDirectoryService20150416DeleteConditionalForwarder<
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
                    (typeof client)['#X-Amz-Target=DirectoryService_20150416.DeleteConditionalForwarder']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.DeleteConditionalForwarder']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetDirectoryService20150416DeleteConditionalForwarderMutationOptions<
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

export function getPostXAmzTargetDirectoryService20150416DeleteDirectoryMutationKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.DeleteDirectory',
    '/#X-Amz-Target=DirectoryService_20150416.DeleteDirectory',
    'POST',
  ] as const
}

export function getPostXAmzTargetDirectoryService20150416DeleteDirectoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.DeleteDirectory']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDirectoryService20150416DeleteDirectoryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DirectoryService_20150416.DeleteDirectory']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DirectoryService_20150416.DeleteDirectory'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetDirectoryService20150416DeleteDirectory<
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
                    (typeof client)['#X-Amz-Target=DirectoryService_20150416.DeleteDirectory']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.DeleteDirectory']['$post']
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
  const mutationDefaults = getPostXAmzTargetDirectoryService20150416DeleteDirectoryMutationOptions<
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

export function getPostXAmzTargetDirectoryService20150416DeleteLogSubscriptionMutationKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.DeleteLogSubscription',
    '/#X-Amz-Target=DirectoryService_20150416.DeleteLogSubscription',
    'POST',
  ] as const
}

export function getPostXAmzTargetDirectoryService20150416DeleteLogSubscriptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.DeleteLogSubscription']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDirectoryService20150416DeleteLogSubscriptionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DirectoryService_20150416.DeleteLogSubscription']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DirectoryService_20150416.DeleteLogSubscription'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetDirectoryService20150416DeleteLogSubscription<
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
                    (typeof client)['#X-Amz-Target=DirectoryService_20150416.DeleteLogSubscription']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.DeleteLogSubscription']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetDirectoryService20150416DeleteLogSubscriptionMutationOptions<
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

export function getPostXAmzTargetDirectoryService20150416DeleteSnapshotMutationKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.DeleteSnapshot',
    '/#X-Amz-Target=DirectoryService_20150416.DeleteSnapshot',
    'POST',
  ] as const
}

export function getPostXAmzTargetDirectoryService20150416DeleteSnapshotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.DeleteSnapshot']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDirectoryService20150416DeleteSnapshotMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DirectoryService_20150416.DeleteSnapshot']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DirectoryService_20150416.DeleteSnapshot'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetDirectoryService20150416DeleteSnapshot<
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
                    (typeof client)['#X-Amz-Target=DirectoryService_20150416.DeleteSnapshot']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.DeleteSnapshot']['$post']
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
  const mutationDefaults = getPostXAmzTargetDirectoryService20150416DeleteSnapshotMutationOptions<
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

export function getPostXAmzTargetDirectoryService20150416DeleteTrustMutationKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.DeleteTrust',
    '/#X-Amz-Target=DirectoryService_20150416.DeleteTrust',
    'POST',
  ] as const
}

export function getPostXAmzTargetDirectoryService20150416DeleteTrustMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.DeleteTrust']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDirectoryService20150416DeleteTrustMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DirectoryService_20150416.DeleteTrust']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DirectoryService_20150416.DeleteTrust'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetDirectoryService20150416DeleteTrust<
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
                    (typeof client)['#X-Amz-Target=DirectoryService_20150416.DeleteTrust']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.DeleteTrust']['$post']
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
  const mutationDefaults = getPostXAmzTargetDirectoryService20150416DeleteTrustMutationOptions<
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

export function getPostXAmzTargetDirectoryService20150416DeregisterCertificateMutationKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.DeregisterCertificate',
    '/#X-Amz-Target=DirectoryService_20150416.DeregisterCertificate',
    'POST',
  ] as const
}

export function getPostXAmzTargetDirectoryService20150416DeregisterCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.DeregisterCertificate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDirectoryService20150416DeregisterCertificateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DirectoryService_20150416.DeregisterCertificate']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DirectoryService_20150416.DeregisterCertificate'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetDirectoryService20150416DeregisterCertificate<
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
                    (typeof client)['#X-Amz-Target=DirectoryService_20150416.DeregisterCertificate']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.DeregisterCertificate']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetDirectoryService20150416DeregisterCertificateMutationOptions<
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

export function getPostXAmzTargetDirectoryService20150416DeregisterEventTopicMutationKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.DeregisterEventTopic',
    '/#X-Amz-Target=DirectoryService_20150416.DeregisterEventTopic',
    'POST',
  ] as const
}

export function getPostXAmzTargetDirectoryService20150416DeregisterEventTopicMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.DeregisterEventTopic']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDirectoryService20150416DeregisterEventTopicMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DirectoryService_20150416.DeregisterEventTopic']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DirectoryService_20150416.DeregisterEventTopic'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetDirectoryService20150416DeregisterEventTopic<
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
                    (typeof client)['#X-Amz-Target=DirectoryService_20150416.DeregisterEventTopic']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.DeregisterEventTopic']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetDirectoryService20150416DeregisterEventTopicMutationOptions<
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

export function getPostXAmzTargetDirectoryService20150416DescribeCertificateMutationKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.DescribeCertificate',
    '/#X-Amz-Target=DirectoryService_20150416.DescribeCertificate',
    'POST',
  ] as const
}

export function getPostXAmzTargetDirectoryService20150416DescribeCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeCertificate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDirectoryService20150416DescribeCertificateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeCertificate']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DirectoryService_20150416.DescribeCertificate'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetDirectoryService20150416DescribeCertificate<
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
                    (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeCertificate']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeCertificate']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetDirectoryService20150416DescribeCertificateMutationOptions<
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

export function getPostXAmzTargetDirectoryService20150416DescribeClientAuthenticationSettingsMutationKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.DescribeClientAuthenticationSettings',
    '/#X-Amz-Target=DirectoryService_20150416.DescribeClientAuthenticationSettings',
    'POST',
  ] as const
}

export function getPostXAmzTargetDirectoryService20150416DescribeClientAuthenticationSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeClientAuthenticationSettings']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetDirectoryService20150416DescribeClientAuthenticationSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeClientAuthenticationSettings']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=DirectoryService_20150416.DescribeClientAuthenticationSettings'
        ].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetDirectoryService20150416DescribeClientAuthenticationSettings<
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
                    (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeClientAuthenticationSettings']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeClientAuthenticationSettings']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetDirectoryService20150416DescribeClientAuthenticationSettingsMutationOptions<
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

export function getPostXAmzTargetDirectoryService20150416DescribeConditionalForwardersMutationKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.DescribeConditionalForwarders',
    '/#X-Amz-Target=DirectoryService_20150416.DescribeConditionalForwarders',
    'POST',
  ] as const
}

export function getPostXAmzTargetDirectoryService20150416DescribeConditionalForwardersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeConditionalForwarders']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetDirectoryService20150416DescribeConditionalForwardersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeConditionalForwarders']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DirectoryService_20150416.DescribeConditionalForwarders'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetDirectoryService20150416DescribeConditionalForwarders<
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
                    (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeConditionalForwarders']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeConditionalForwarders']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetDirectoryService20150416DescribeConditionalForwardersMutationOptions<
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

export function getPostXAmzTargetDirectoryService20150416DescribeDirectoriesMutationKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.DescribeDirectories',
    '/#X-Amz-Target=DirectoryService_20150416.DescribeDirectories',
    'POST',
  ] as const
}

export function getPostXAmzTargetDirectoryService20150416DescribeDirectoriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeDirectories']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDirectoryService20150416DescribeDirectoriesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeDirectories']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DirectoryService_20150416.DescribeDirectories'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetDirectoryService20150416DescribeDirectories<
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
                    (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeDirectories']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeDirectories']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetDirectoryService20150416DescribeDirectoriesMutationOptions<
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

export function getPostXAmzTargetDirectoryService20150416DescribeDomainControllersMutationKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.DescribeDomainControllers',
    '/#X-Amz-Target=DirectoryService_20150416.DescribeDomainControllers',
    'POST',
  ] as const
}

export function getPostXAmzTargetDirectoryService20150416DescribeDomainControllersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeDomainControllers']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDirectoryService20150416DescribeDomainControllersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeDomainControllers']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DirectoryService_20150416.DescribeDomainControllers'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetDirectoryService20150416DescribeDomainControllers<
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
                    (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeDomainControllers']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeDomainControllers']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetDirectoryService20150416DescribeDomainControllersMutationOptions<
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

export function getPostXAmzTargetDirectoryService20150416DescribeEventTopicsMutationKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.DescribeEventTopics',
    '/#X-Amz-Target=DirectoryService_20150416.DescribeEventTopics',
    'POST',
  ] as const
}

export function getPostXAmzTargetDirectoryService20150416DescribeEventTopicsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeEventTopics']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDirectoryService20150416DescribeEventTopicsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeEventTopics']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DirectoryService_20150416.DescribeEventTopics'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetDirectoryService20150416DescribeEventTopics<
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
                    (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeEventTopics']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeEventTopics']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetDirectoryService20150416DescribeEventTopicsMutationOptions<
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

export function getPostXAmzTargetDirectoryService20150416DescribeLDAPSSettingsMutationKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.DescribeLDAPSSettings',
    '/#X-Amz-Target=DirectoryService_20150416.DescribeLDAPSSettings',
    'POST',
  ] as const
}

export function getPostXAmzTargetDirectoryService20150416DescribeLDAPSSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeLDAPSSettings']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDirectoryService20150416DescribeLDAPSSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeLDAPSSettings']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DirectoryService_20150416.DescribeLDAPSSettings'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetDirectoryService20150416DescribeLDAPSSettings<
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
                    (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeLDAPSSettings']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeLDAPSSettings']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetDirectoryService20150416DescribeLDAPSSettingsMutationOptions<
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

export function getPostXAmzTargetDirectoryService20150416DescribeRegionsMutationKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.DescribeRegions',
    '/#X-Amz-Target=DirectoryService_20150416.DescribeRegions',
    'POST',
  ] as const
}

export function getPostXAmzTargetDirectoryService20150416DescribeRegionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeRegions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDirectoryService20150416DescribeRegionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeRegions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DirectoryService_20150416.DescribeRegions'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetDirectoryService20150416DescribeRegions<
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
                    (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeRegions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeRegions']['$post']
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
  const mutationDefaults = getPostXAmzTargetDirectoryService20150416DescribeRegionsMutationOptions<
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

export function getPostXAmzTargetDirectoryService20150416DescribeSettingsMutationKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.DescribeSettings',
    '/#X-Amz-Target=DirectoryService_20150416.DescribeSettings',
    'POST',
  ] as const
}

export function getPostXAmzTargetDirectoryService20150416DescribeSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeSettings']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDirectoryService20150416DescribeSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeSettings']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DirectoryService_20150416.DescribeSettings'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetDirectoryService20150416DescribeSettings<
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
                    (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeSettings']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeSettings']['$post']
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
  const mutationDefaults = getPostXAmzTargetDirectoryService20150416DescribeSettingsMutationOptions<
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

export function getPostXAmzTargetDirectoryService20150416DescribeSharedDirectoriesMutationKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.DescribeSharedDirectories',
    '/#X-Amz-Target=DirectoryService_20150416.DescribeSharedDirectories',
    'POST',
  ] as const
}

export function getPostXAmzTargetDirectoryService20150416DescribeSharedDirectoriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeSharedDirectories']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDirectoryService20150416DescribeSharedDirectoriesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeSharedDirectories']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DirectoryService_20150416.DescribeSharedDirectories'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetDirectoryService20150416DescribeSharedDirectories<
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
                    (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeSharedDirectories']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeSharedDirectories']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetDirectoryService20150416DescribeSharedDirectoriesMutationOptions<
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

export function getPostXAmzTargetDirectoryService20150416DescribeSnapshotsMutationKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.DescribeSnapshots',
    '/#X-Amz-Target=DirectoryService_20150416.DescribeSnapshots',
    'POST',
  ] as const
}

export function getPostXAmzTargetDirectoryService20150416DescribeSnapshotsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeSnapshots']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDirectoryService20150416DescribeSnapshotsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeSnapshots']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DirectoryService_20150416.DescribeSnapshots'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetDirectoryService20150416DescribeSnapshots<
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
                    (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeSnapshots']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeSnapshots']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetDirectoryService20150416DescribeSnapshotsMutationOptions<
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

export function getPostXAmzTargetDirectoryService20150416DescribeTrustsMutationKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.DescribeTrusts',
    '/#X-Amz-Target=DirectoryService_20150416.DescribeTrusts',
    'POST',
  ] as const
}

export function getPostXAmzTargetDirectoryService20150416DescribeTrustsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeTrusts']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDirectoryService20150416DescribeTrustsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeTrusts']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DirectoryService_20150416.DescribeTrusts'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetDirectoryService20150416DescribeTrusts<
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
                    (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeTrusts']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeTrusts']['$post']
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
  const mutationDefaults = getPostXAmzTargetDirectoryService20150416DescribeTrustsMutationOptions<
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

export function getPostXAmzTargetDirectoryService20150416DescribeUpdateDirectoryMutationKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.DescribeUpdateDirectory',
    '/#X-Amz-Target=DirectoryService_20150416.DescribeUpdateDirectory',
    'POST',
  ] as const
}

export function getPostXAmzTargetDirectoryService20150416DescribeUpdateDirectoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeUpdateDirectory']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDirectoryService20150416DescribeUpdateDirectoryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeUpdateDirectory']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DirectoryService_20150416.DescribeUpdateDirectory'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetDirectoryService20150416DescribeUpdateDirectory<
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
                    (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeUpdateDirectory']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.DescribeUpdateDirectory']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetDirectoryService20150416DescribeUpdateDirectoryMutationOptions<
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

export function getPostXAmzTargetDirectoryService20150416DisableClientAuthenticationMutationKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.DisableClientAuthentication',
    '/#X-Amz-Target=DirectoryService_20150416.DisableClientAuthentication',
    'POST',
  ] as const
}

export function getPostXAmzTargetDirectoryService20150416DisableClientAuthenticationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.DisableClientAuthentication']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDirectoryService20150416DisableClientAuthenticationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DirectoryService_20150416.DisableClientAuthentication']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DirectoryService_20150416.DisableClientAuthentication'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetDirectoryService20150416DisableClientAuthentication<
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
                    (typeof client)['#X-Amz-Target=DirectoryService_20150416.DisableClientAuthentication']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.DisableClientAuthentication']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetDirectoryService20150416DisableClientAuthenticationMutationOptions<
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

export function getPostXAmzTargetDirectoryService20150416DisableLDAPSMutationKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.DisableLDAPS',
    '/#X-Amz-Target=DirectoryService_20150416.DisableLDAPS',
    'POST',
  ] as const
}

export function getPostXAmzTargetDirectoryService20150416DisableLDAPSMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.DisableLDAPS']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDirectoryService20150416DisableLDAPSMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DirectoryService_20150416.DisableLDAPS']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DirectoryService_20150416.DisableLDAPS'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetDirectoryService20150416DisableLDAPS<
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
                    (typeof client)['#X-Amz-Target=DirectoryService_20150416.DisableLDAPS']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.DisableLDAPS']['$post']
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
  const mutationDefaults = getPostXAmzTargetDirectoryService20150416DisableLDAPSMutationOptions<
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

export function getPostXAmzTargetDirectoryService20150416DisableRadiusMutationKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.DisableRadius',
    '/#X-Amz-Target=DirectoryService_20150416.DisableRadius',
    'POST',
  ] as const
}

export function getPostXAmzTargetDirectoryService20150416DisableRadiusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.DisableRadius']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDirectoryService20150416DisableRadiusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DirectoryService_20150416.DisableRadius']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DirectoryService_20150416.DisableRadius'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetDirectoryService20150416DisableRadius<
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
                    (typeof client)['#X-Amz-Target=DirectoryService_20150416.DisableRadius']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.DisableRadius']['$post']
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
  const mutationDefaults = getPostXAmzTargetDirectoryService20150416DisableRadiusMutationOptions<
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

export function getPostXAmzTargetDirectoryService20150416DisableSsoMutationKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.DisableSso',
    '/#X-Amz-Target=DirectoryService_20150416.DisableSso',
    'POST',
  ] as const
}

export function getPostXAmzTargetDirectoryService20150416DisableSsoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.DisableSso']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDirectoryService20150416DisableSsoMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DirectoryService_20150416.DisableSso']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DirectoryService_20150416.DisableSso'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetDirectoryService20150416DisableSso<
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
                    (typeof client)['#X-Amz-Target=DirectoryService_20150416.DisableSso']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.DisableSso']['$post']
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
  const mutationDefaults = getPostXAmzTargetDirectoryService20150416DisableSsoMutationOptions<
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

export function getPostXAmzTargetDirectoryService20150416EnableClientAuthenticationMutationKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.EnableClientAuthentication',
    '/#X-Amz-Target=DirectoryService_20150416.EnableClientAuthentication',
    'POST',
  ] as const
}

export function getPostXAmzTargetDirectoryService20150416EnableClientAuthenticationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.EnableClientAuthentication']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDirectoryService20150416EnableClientAuthenticationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DirectoryService_20150416.EnableClientAuthentication']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DirectoryService_20150416.EnableClientAuthentication'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetDirectoryService20150416EnableClientAuthentication<
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
                    (typeof client)['#X-Amz-Target=DirectoryService_20150416.EnableClientAuthentication']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.EnableClientAuthentication']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetDirectoryService20150416EnableClientAuthenticationMutationOptions<
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

export function getPostXAmzTargetDirectoryService20150416EnableLDAPSMutationKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.EnableLDAPS',
    '/#X-Amz-Target=DirectoryService_20150416.EnableLDAPS',
    'POST',
  ] as const
}

export function getPostXAmzTargetDirectoryService20150416EnableLDAPSMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.EnableLDAPS']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDirectoryService20150416EnableLDAPSMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DirectoryService_20150416.EnableLDAPS']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DirectoryService_20150416.EnableLDAPS'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetDirectoryService20150416EnableLDAPS<
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
                    (typeof client)['#X-Amz-Target=DirectoryService_20150416.EnableLDAPS']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.EnableLDAPS']['$post']
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
  const mutationDefaults = getPostXAmzTargetDirectoryService20150416EnableLDAPSMutationOptions<
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

export function getPostXAmzTargetDirectoryService20150416EnableRadiusMutationKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.EnableRadius',
    '/#X-Amz-Target=DirectoryService_20150416.EnableRadius',
    'POST',
  ] as const
}

export function getPostXAmzTargetDirectoryService20150416EnableRadiusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.EnableRadius']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDirectoryService20150416EnableRadiusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DirectoryService_20150416.EnableRadius']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DirectoryService_20150416.EnableRadius'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetDirectoryService20150416EnableRadius<
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
                    (typeof client)['#X-Amz-Target=DirectoryService_20150416.EnableRadius']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.EnableRadius']['$post']
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
  const mutationDefaults = getPostXAmzTargetDirectoryService20150416EnableRadiusMutationOptions<
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

export function getPostXAmzTargetDirectoryService20150416EnableSsoMutationKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.EnableSso',
    '/#X-Amz-Target=DirectoryService_20150416.EnableSso',
    'POST',
  ] as const
}

export function getPostXAmzTargetDirectoryService20150416EnableSsoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=DirectoryService_20150416.EnableSso']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDirectoryService20150416EnableSsoMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DirectoryService_20150416.EnableSso']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DirectoryService_20150416.EnableSso'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetDirectoryService20150416EnableSso<
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
                    (typeof client)['#X-Amz-Target=DirectoryService_20150416.EnableSso']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.EnableSso']['$post']
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
  const mutationDefaults = getPostXAmzTargetDirectoryService20150416EnableSsoMutationOptions<
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

export function getPostXAmzTargetDirectoryService20150416GetDirectoryLimitsMutationKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.GetDirectoryLimits',
    '/#X-Amz-Target=DirectoryService_20150416.GetDirectoryLimits',
    'POST',
  ] as const
}

export function getPostXAmzTargetDirectoryService20150416GetDirectoryLimitsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.GetDirectoryLimits']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDirectoryService20150416GetDirectoryLimitsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DirectoryService_20150416.GetDirectoryLimits']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DirectoryService_20150416.GetDirectoryLimits'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetDirectoryService20150416GetDirectoryLimits<
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
                    (typeof client)['#X-Amz-Target=DirectoryService_20150416.GetDirectoryLimits']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.GetDirectoryLimits']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetDirectoryService20150416GetDirectoryLimitsMutationOptions<
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

export function getPostXAmzTargetDirectoryService20150416GetSnapshotLimitsMutationKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.GetSnapshotLimits',
    '/#X-Amz-Target=DirectoryService_20150416.GetSnapshotLimits',
    'POST',
  ] as const
}

export function getPostXAmzTargetDirectoryService20150416GetSnapshotLimitsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.GetSnapshotLimits']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDirectoryService20150416GetSnapshotLimitsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DirectoryService_20150416.GetSnapshotLimits']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DirectoryService_20150416.GetSnapshotLimits'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetDirectoryService20150416GetSnapshotLimits<
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
                    (typeof client)['#X-Amz-Target=DirectoryService_20150416.GetSnapshotLimits']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.GetSnapshotLimits']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetDirectoryService20150416GetSnapshotLimitsMutationOptions<
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

export function getPostXAmzTargetDirectoryService20150416ListCertificatesMutationKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.ListCertificates',
    '/#X-Amz-Target=DirectoryService_20150416.ListCertificates',
    'POST',
  ] as const
}

export function getPostXAmzTargetDirectoryService20150416ListCertificatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.ListCertificates']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDirectoryService20150416ListCertificatesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DirectoryService_20150416.ListCertificates']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DirectoryService_20150416.ListCertificates'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetDirectoryService20150416ListCertificates<
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
                    (typeof client)['#X-Amz-Target=DirectoryService_20150416.ListCertificates']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.ListCertificates']['$post']
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
  const mutationDefaults = getPostXAmzTargetDirectoryService20150416ListCertificatesMutationOptions<
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

export function getPostXAmzTargetDirectoryService20150416ListIpRoutesMutationKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.ListIpRoutes',
    '/#X-Amz-Target=DirectoryService_20150416.ListIpRoutes',
    'POST',
  ] as const
}

export function getPostXAmzTargetDirectoryService20150416ListIpRoutesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.ListIpRoutes']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDirectoryService20150416ListIpRoutesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DirectoryService_20150416.ListIpRoutes']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DirectoryService_20150416.ListIpRoutes'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetDirectoryService20150416ListIpRoutes<
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
                    (typeof client)['#X-Amz-Target=DirectoryService_20150416.ListIpRoutes']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.ListIpRoutes']['$post']
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
  const mutationDefaults = getPostXAmzTargetDirectoryService20150416ListIpRoutesMutationOptions<
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

export function getPostXAmzTargetDirectoryService20150416ListLogSubscriptionsMutationKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.ListLogSubscriptions',
    '/#X-Amz-Target=DirectoryService_20150416.ListLogSubscriptions',
    'POST',
  ] as const
}

export function getPostXAmzTargetDirectoryService20150416ListLogSubscriptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.ListLogSubscriptions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDirectoryService20150416ListLogSubscriptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DirectoryService_20150416.ListLogSubscriptions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DirectoryService_20150416.ListLogSubscriptions'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetDirectoryService20150416ListLogSubscriptions<
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
                    (typeof client)['#X-Amz-Target=DirectoryService_20150416.ListLogSubscriptions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.ListLogSubscriptions']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetDirectoryService20150416ListLogSubscriptionsMutationOptions<
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

export function getPostXAmzTargetDirectoryService20150416ListSchemaExtensionsMutationKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.ListSchemaExtensions',
    '/#X-Amz-Target=DirectoryService_20150416.ListSchemaExtensions',
    'POST',
  ] as const
}

export function getPostXAmzTargetDirectoryService20150416ListSchemaExtensionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.ListSchemaExtensions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDirectoryService20150416ListSchemaExtensionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DirectoryService_20150416.ListSchemaExtensions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DirectoryService_20150416.ListSchemaExtensions'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetDirectoryService20150416ListSchemaExtensions<
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
                    (typeof client)['#X-Amz-Target=DirectoryService_20150416.ListSchemaExtensions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.ListSchemaExtensions']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetDirectoryService20150416ListSchemaExtensionsMutationOptions<
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

export function getPostXAmzTargetDirectoryService20150416ListTagsForResourceMutationKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.ListTagsForResource',
    '/#X-Amz-Target=DirectoryService_20150416.ListTagsForResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetDirectoryService20150416ListTagsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.ListTagsForResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDirectoryService20150416ListTagsForResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DirectoryService_20150416.ListTagsForResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DirectoryService_20150416.ListTagsForResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetDirectoryService20150416ListTagsForResource<
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
                    (typeof client)['#X-Amz-Target=DirectoryService_20150416.ListTagsForResource']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.ListTagsForResource']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetDirectoryService20150416ListTagsForResourceMutationOptions<
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

export function getPostXAmzTargetDirectoryService20150416RegisterCertificateMutationKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.RegisterCertificate',
    '/#X-Amz-Target=DirectoryService_20150416.RegisterCertificate',
    'POST',
  ] as const
}

export function getPostXAmzTargetDirectoryService20150416RegisterCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.RegisterCertificate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDirectoryService20150416RegisterCertificateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DirectoryService_20150416.RegisterCertificate']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DirectoryService_20150416.RegisterCertificate'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetDirectoryService20150416RegisterCertificate<
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
                    (typeof client)['#X-Amz-Target=DirectoryService_20150416.RegisterCertificate']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.RegisterCertificate']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetDirectoryService20150416RegisterCertificateMutationOptions<
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

export function getPostXAmzTargetDirectoryService20150416RegisterEventTopicMutationKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.RegisterEventTopic',
    '/#X-Amz-Target=DirectoryService_20150416.RegisterEventTopic',
    'POST',
  ] as const
}

export function getPostXAmzTargetDirectoryService20150416RegisterEventTopicMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.RegisterEventTopic']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDirectoryService20150416RegisterEventTopicMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DirectoryService_20150416.RegisterEventTopic']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DirectoryService_20150416.RegisterEventTopic'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetDirectoryService20150416RegisterEventTopic<
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
                    (typeof client)['#X-Amz-Target=DirectoryService_20150416.RegisterEventTopic']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.RegisterEventTopic']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetDirectoryService20150416RegisterEventTopicMutationOptions<
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

export function getPostXAmzTargetDirectoryService20150416RejectSharedDirectoryMutationKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.RejectSharedDirectory',
    '/#X-Amz-Target=DirectoryService_20150416.RejectSharedDirectory',
    'POST',
  ] as const
}

export function getPostXAmzTargetDirectoryService20150416RejectSharedDirectoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.RejectSharedDirectory']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDirectoryService20150416RejectSharedDirectoryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DirectoryService_20150416.RejectSharedDirectory']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DirectoryService_20150416.RejectSharedDirectory'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetDirectoryService20150416RejectSharedDirectory<
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
                    (typeof client)['#X-Amz-Target=DirectoryService_20150416.RejectSharedDirectory']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.RejectSharedDirectory']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetDirectoryService20150416RejectSharedDirectoryMutationOptions<
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

export function getPostXAmzTargetDirectoryService20150416RemoveIpRoutesMutationKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.RemoveIpRoutes',
    '/#X-Amz-Target=DirectoryService_20150416.RemoveIpRoutes',
    'POST',
  ] as const
}

export function getPostXAmzTargetDirectoryService20150416RemoveIpRoutesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.RemoveIpRoutes']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDirectoryService20150416RemoveIpRoutesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DirectoryService_20150416.RemoveIpRoutes']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DirectoryService_20150416.RemoveIpRoutes'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetDirectoryService20150416RemoveIpRoutes<
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
                    (typeof client)['#X-Amz-Target=DirectoryService_20150416.RemoveIpRoutes']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.RemoveIpRoutes']['$post']
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
  const mutationDefaults = getPostXAmzTargetDirectoryService20150416RemoveIpRoutesMutationOptions<
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

export function getPostXAmzTargetDirectoryService20150416RemoveRegionMutationKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.RemoveRegion',
    '/#X-Amz-Target=DirectoryService_20150416.RemoveRegion',
    'POST',
  ] as const
}

export function getPostXAmzTargetDirectoryService20150416RemoveRegionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.RemoveRegion']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDirectoryService20150416RemoveRegionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DirectoryService_20150416.RemoveRegion']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DirectoryService_20150416.RemoveRegion'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetDirectoryService20150416RemoveRegion<
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
                    (typeof client)['#X-Amz-Target=DirectoryService_20150416.RemoveRegion']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.RemoveRegion']['$post']
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
  const mutationDefaults = getPostXAmzTargetDirectoryService20150416RemoveRegionMutationOptions<
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

export function getPostXAmzTargetDirectoryService20150416RemoveTagsFromResourceMutationKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.RemoveTagsFromResource',
    '/#X-Amz-Target=DirectoryService_20150416.RemoveTagsFromResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetDirectoryService20150416RemoveTagsFromResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.RemoveTagsFromResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDirectoryService20150416RemoveTagsFromResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DirectoryService_20150416.RemoveTagsFromResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DirectoryService_20150416.RemoveTagsFromResource'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetDirectoryService20150416RemoveTagsFromResource<
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
                    (typeof client)['#X-Amz-Target=DirectoryService_20150416.RemoveTagsFromResource']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.RemoveTagsFromResource']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetDirectoryService20150416RemoveTagsFromResourceMutationOptions<
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

export function getPostXAmzTargetDirectoryService20150416ResetUserPasswordMutationKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.ResetUserPassword',
    '/#X-Amz-Target=DirectoryService_20150416.ResetUserPassword',
    'POST',
  ] as const
}

export function getPostXAmzTargetDirectoryService20150416ResetUserPasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.ResetUserPassword']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDirectoryService20150416ResetUserPasswordMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DirectoryService_20150416.ResetUserPassword']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DirectoryService_20150416.ResetUserPassword'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetDirectoryService20150416ResetUserPassword<
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
                    (typeof client)['#X-Amz-Target=DirectoryService_20150416.ResetUserPassword']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.ResetUserPassword']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetDirectoryService20150416ResetUserPasswordMutationOptions<
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

export function getPostXAmzTargetDirectoryService20150416RestoreFromSnapshotMutationKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.RestoreFromSnapshot',
    '/#X-Amz-Target=DirectoryService_20150416.RestoreFromSnapshot',
    'POST',
  ] as const
}

export function getPostXAmzTargetDirectoryService20150416RestoreFromSnapshotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.RestoreFromSnapshot']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDirectoryService20150416RestoreFromSnapshotMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DirectoryService_20150416.RestoreFromSnapshot']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DirectoryService_20150416.RestoreFromSnapshot'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetDirectoryService20150416RestoreFromSnapshot<
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
                    (typeof client)['#X-Amz-Target=DirectoryService_20150416.RestoreFromSnapshot']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.RestoreFromSnapshot']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetDirectoryService20150416RestoreFromSnapshotMutationOptions<
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

export function getPostXAmzTargetDirectoryService20150416ShareDirectoryMutationKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.ShareDirectory',
    '/#X-Amz-Target=DirectoryService_20150416.ShareDirectory',
    'POST',
  ] as const
}

export function getPostXAmzTargetDirectoryService20150416ShareDirectoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.ShareDirectory']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDirectoryService20150416ShareDirectoryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DirectoryService_20150416.ShareDirectory']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DirectoryService_20150416.ShareDirectory'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetDirectoryService20150416ShareDirectory<
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
                    (typeof client)['#X-Amz-Target=DirectoryService_20150416.ShareDirectory']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.ShareDirectory']['$post']
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
  const mutationDefaults = getPostXAmzTargetDirectoryService20150416ShareDirectoryMutationOptions<
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

export function getPostXAmzTargetDirectoryService20150416StartSchemaExtensionMutationKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.StartSchemaExtension',
    '/#X-Amz-Target=DirectoryService_20150416.StartSchemaExtension',
    'POST',
  ] as const
}

export function getPostXAmzTargetDirectoryService20150416StartSchemaExtensionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.StartSchemaExtension']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDirectoryService20150416StartSchemaExtensionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DirectoryService_20150416.StartSchemaExtension']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DirectoryService_20150416.StartSchemaExtension'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetDirectoryService20150416StartSchemaExtension<
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
                    (typeof client)['#X-Amz-Target=DirectoryService_20150416.StartSchemaExtension']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.StartSchemaExtension']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetDirectoryService20150416StartSchemaExtensionMutationOptions<
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

export function getPostXAmzTargetDirectoryService20150416UnshareDirectoryMutationKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.UnshareDirectory',
    '/#X-Amz-Target=DirectoryService_20150416.UnshareDirectory',
    'POST',
  ] as const
}

export function getPostXAmzTargetDirectoryService20150416UnshareDirectoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.UnshareDirectory']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDirectoryService20150416UnshareDirectoryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DirectoryService_20150416.UnshareDirectory']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DirectoryService_20150416.UnshareDirectory'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetDirectoryService20150416UnshareDirectory<
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
                    (typeof client)['#X-Amz-Target=DirectoryService_20150416.UnshareDirectory']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.UnshareDirectory']['$post']
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
  const mutationDefaults = getPostXAmzTargetDirectoryService20150416UnshareDirectoryMutationOptions<
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

export function getPostXAmzTargetDirectoryService20150416UpdateConditionalForwarderMutationKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.UpdateConditionalForwarder',
    '/#X-Amz-Target=DirectoryService_20150416.UpdateConditionalForwarder',
    'POST',
  ] as const
}

export function getPostXAmzTargetDirectoryService20150416UpdateConditionalForwarderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.UpdateConditionalForwarder']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDirectoryService20150416UpdateConditionalForwarderMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DirectoryService_20150416.UpdateConditionalForwarder']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DirectoryService_20150416.UpdateConditionalForwarder'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetDirectoryService20150416UpdateConditionalForwarder<
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
                    (typeof client)['#X-Amz-Target=DirectoryService_20150416.UpdateConditionalForwarder']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.UpdateConditionalForwarder']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetDirectoryService20150416UpdateConditionalForwarderMutationOptions<
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

export function getPostXAmzTargetDirectoryService20150416UpdateDirectorySetupMutationKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.UpdateDirectorySetup',
    '/#X-Amz-Target=DirectoryService_20150416.UpdateDirectorySetup',
    'POST',
  ] as const
}

export function getPostXAmzTargetDirectoryService20150416UpdateDirectorySetupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.UpdateDirectorySetup']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDirectoryService20150416UpdateDirectorySetupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DirectoryService_20150416.UpdateDirectorySetup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DirectoryService_20150416.UpdateDirectorySetup'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetDirectoryService20150416UpdateDirectorySetup<
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
                    (typeof client)['#X-Amz-Target=DirectoryService_20150416.UpdateDirectorySetup']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.UpdateDirectorySetup']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetDirectoryService20150416UpdateDirectorySetupMutationOptions<
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

export function getPostXAmzTargetDirectoryService20150416UpdateNumberOfDomainControllersMutationKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.UpdateNumberOfDomainControllers',
    '/#X-Amz-Target=DirectoryService_20150416.UpdateNumberOfDomainControllers',
    'POST',
  ] as const
}

export function getPostXAmzTargetDirectoryService20150416UpdateNumberOfDomainControllersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.UpdateNumberOfDomainControllers']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetDirectoryService20150416UpdateNumberOfDomainControllersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DirectoryService_20150416.UpdateNumberOfDomainControllers']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DirectoryService_20150416.UpdateNumberOfDomainControllers'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetDirectoryService20150416UpdateNumberOfDomainControllers<
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
                    (typeof client)['#X-Amz-Target=DirectoryService_20150416.UpdateNumberOfDomainControllers']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.UpdateNumberOfDomainControllers']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetDirectoryService20150416UpdateNumberOfDomainControllersMutationOptions<
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

export function getPostXAmzTargetDirectoryService20150416UpdateRadiusMutationKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.UpdateRadius',
    '/#X-Amz-Target=DirectoryService_20150416.UpdateRadius',
    'POST',
  ] as const
}

export function getPostXAmzTargetDirectoryService20150416UpdateRadiusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.UpdateRadius']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDirectoryService20150416UpdateRadiusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DirectoryService_20150416.UpdateRadius']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DirectoryService_20150416.UpdateRadius'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetDirectoryService20150416UpdateRadius<
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
                    (typeof client)['#X-Amz-Target=DirectoryService_20150416.UpdateRadius']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.UpdateRadius']['$post']
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
  const mutationDefaults = getPostXAmzTargetDirectoryService20150416UpdateRadiusMutationOptions<
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

export function getPostXAmzTargetDirectoryService20150416UpdateSettingsMutationKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.UpdateSettings',
    '/#X-Amz-Target=DirectoryService_20150416.UpdateSettings',
    'POST',
  ] as const
}

export function getPostXAmzTargetDirectoryService20150416UpdateSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.UpdateSettings']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDirectoryService20150416UpdateSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DirectoryService_20150416.UpdateSettings']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DirectoryService_20150416.UpdateSettings'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetDirectoryService20150416UpdateSettings<
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
                    (typeof client)['#X-Amz-Target=DirectoryService_20150416.UpdateSettings']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.UpdateSettings']['$post']
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
  const mutationDefaults = getPostXAmzTargetDirectoryService20150416UpdateSettingsMutationOptions<
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

export function getPostXAmzTargetDirectoryService20150416UpdateTrustMutationKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.UpdateTrust',
    '/#X-Amz-Target=DirectoryService_20150416.UpdateTrust',
    'POST',
  ] as const
}

export function getPostXAmzTargetDirectoryService20150416UpdateTrustMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.UpdateTrust']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDirectoryService20150416UpdateTrustMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DirectoryService_20150416.UpdateTrust']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DirectoryService_20150416.UpdateTrust'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetDirectoryService20150416UpdateTrust<
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
                    (typeof client)['#X-Amz-Target=DirectoryService_20150416.UpdateTrust']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.UpdateTrust']['$post']
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
  const mutationDefaults = getPostXAmzTargetDirectoryService20150416UpdateTrustMutationOptions<
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

export function getPostXAmzTargetDirectoryService20150416VerifyTrustMutationKey() {
  return [
    '#X-Amz-Target=DirectoryService_20150416.VerifyTrust',
    '/#X-Amz-Target=DirectoryService_20150416.VerifyTrust',
    'POST',
  ] as const
}

export function getPostXAmzTargetDirectoryService20150416VerifyTrustMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=DirectoryService_20150416.VerifyTrust']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDirectoryService20150416VerifyTrustMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DirectoryService_20150416.VerifyTrust']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DirectoryService_20150416.VerifyTrust'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetDirectoryService20150416VerifyTrust<
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
                    (typeof client)['#X-Amz-Target=DirectoryService_20150416.VerifyTrust']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DirectoryService_20150416.VerifyTrust']['$post']
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
  const mutationDefaults = getPostXAmzTargetDirectoryService20150416VerifyTrustMutationOptions<
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
