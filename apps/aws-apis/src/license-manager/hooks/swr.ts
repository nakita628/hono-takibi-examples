import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetAWSLicenseManagerAcceptGrantKey() {
  return ['#X-Amz-Target=AWSLicenseManager.AcceptGrant'] as const
}

export function getXAmzTargetAWSLicenseManagerCheckInLicenseKey() {
  return ['#X-Amz-Target=AWSLicenseManager.CheckInLicense'] as const
}

export function getXAmzTargetAWSLicenseManagerCheckoutBorrowLicenseKey() {
  return ['#X-Amz-Target=AWSLicenseManager.CheckoutBorrowLicense'] as const
}

export function getXAmzTargetAWSLicenseManagerCheckoutLicenseKey() {
  return ['#X-Amz-Target=AWSLicenseManager.CheckoutLicense'] as const
}

export function getXAmzTargetAWSLicenseManagerCreateGrantKey() {
  return ['#X-Amz-Target=AWSLicenseManager.CreateGrant'] as const
}

export function getXAmzTargetAWSLicenseManagerCreateGrantVersionKey() {
  return ['#X-Amz-Target=AWSLicenseManager.CreateGrantVersion'] as const
}

export function getXAmzTargetAWSLicenseManagerCreateLicenseKey() {
  return ['#X-Amz-Target=AWSLicenseManager.CreateLicense'] as const
}

export function getXAmzTargetAWSLicenseManagerCreateLicenseConfigurationKey() {
  return ['#X-Amz-Target=AWSLicenseManager.CreateLicenseConfiguration'] as const
}

export function getXAmzTargetAWSLicenseManagerCreateLicenseConversionTaskForResourceKey() {
  return ['#X-Amz-Target=AWSLicenseManager.CreateLicenseConversionTaskForResource'] as const
}

export function getXAmzTargetAWSLicenseManagerCreateLicenseManagerReportGeneratorKey() {
  return ['#X-Amz-Target=AWSLicenseManager.CreateLicenseManagerReportGenerator'] as const
}

export function getXAmzTargetAWSLicenseManagerCreateLicenseVersionKey() {
  return ['#X-Amz-Target=AWSLicenseManager.CreateLicenseVersion'] as const
}

export function getXAmzTargetAWSLicenseManagerCreateTokenKey() {
  return ['#X-Amz-Target=AWSLicenseManager.CreateToken'] as const
}

export function getXAmzTargetAWSLicenseManagerDeleteGrantKey() {
  return ['#X-Amz-Target=AWSLicenseManager.DeleteGrant'] as const
}

export function getXAmzTargetAWSLicenseManagerDeleteLicenseKey() {
  return ['#X-Amz-Target=AWSLicenseManager.DeleteLicense'] as const
}

export function getXAmzTargetAWSLicenseManagerDeleteLicenseConfigurationKey() {
  return ['#X-Amz-Target=AWSLicenseManager.DeleteLicenseConfiguration'] as const
}

export function getXAmzTargetAWSLicenseManagerDeleteLicenseManagerReportGeneratorKey() {
  return ['#X-Amz-Target=AWSLicenseManager.DeleteLicenseManagerReportGenerator'] as const
}

export function getXAmzTargetAWSLicenseManagerDeleteTokenKey() {
  return ['#X-Amz-Target=AWSLicenseManager.DeleteToken'] as const
}

export function getXAmzTargetAWSLicenseManagerExtendLicenseConsumptionKey() {
  return ['#X-Amz-Target=AWSLicenseManager.ExtendLicenseConsumption'] as const
}

export function getXAmzTargetAWSLicenseManagerGetAccessTokenKey() {
  return ['#X-Amz-Target=AWSLicenseManager.GetAccessToken'] as const
}

export function getXAmzTargetAWSLicenseManagerGetGrantKey() {
  return ['#X-Amz-Target=AWSLicenseManager.GetGrant'] as const
}

export function getXAmzTargetAWSLicenseManagerGetLicenseKey() {
  return ['#X-Amz-Target=AWSLicenseManager.GetLicense'] as const
}

export function getXAmzTargetAWSLicenseManagerGetLicenseConfigurationKey() {
  return ['#X-Amz-Target=AWSLicenseManager.GetLicenseConfiguration'] as const
}

export function getXAmzTargetAWSLicenseManagerGetLicenseConversionTaskKey() {
  return ['#X-Amz-Target=AWSLicenseManager.GetLicenseConversionTask'] as const
}

export function getXAmzTargetAWSLicenseManagerGetLicenseManagerReportGeneratorKey() {
  return ['#X-Amz-Target=AWSLicenseManager.GetLicenseManagerReportGenerator'] as const
}

export function getXAmzTargetAWSLicenseManagerGetLicenseUsageKey() {
  return ['#X-Amz-Target=AWSLicenseManager.GetLicenseUsage'] as const
}

export function getXAmzTargetAWSLicenseManagerGetServiceSettingsKey() {
  return ['#X-Amz-Target=AWSLicenseManager.GetServiceSettings'] as const
}

export function getXAmzTargetAWSLicenseManagerListAssociationsForLicenseConfigurationKey() {
  return ['#X-Amz-Target=AWSLicenseManager.ListAssociationsForLicenseConfiguration'] as const
}

export function getXAmzTargetAWSLicenseManagerListDistributedGrantsKey() {
  return ['#X-Amz-Target=AWSLicenseManager.ListDistributedGrants'] as const
}

export function getXAmzTargetAWSLicenseManagerListFailuresForLicenseConfigurationOperationsKey() {
  return ['#X-Amz-Target=AWSLicenseManager.ListFailuresForLicenseConfigurationOperations'] as const
}

export function getXAmzTargetAWSLicenseManagerListLicenseConfigurationsKey() {
  return ['#X-Amz-Target=AWSLicenseManager.ListLicenseConfigurations'] as const
}

export function getXAmzTargetAWSLicenseManagerListLicenseConversionTasksKey() {
  return ['#X-Amz-Target=AWSLicenseManager.ListLicenseConversionTasks'] as const
}

export function getXAmzTargetAWSLicenseManagerListLicenseManagerReportGeneratorsKey() {
  return ['#X-Amz-Target=AWSLicenseManager.ListLicenseManagerReportGenerators'] as const
}

export function getXAmzTargetAWSLicenseManagerListLicenseSpecificationsForResourceKey() {
  return ['#X-Amz-Target=AWSLicenseManager.ListLicenseSpecificationsForResource'] as const
}

export function getXAmzTargetAWSLicenseManagerListLicenseVersionsKey() {
  return ['#X-Amz-Target=AWSLicenseManager.ListLicenseVersions'] as const
}

export function getXAmzTargetAWSLicenseManagerListLicensesKey() {
  return ['#X-Amz-Target=AWSLicenseManager.ListLicenses'] as const
}

export function getXAmzTargetAWSLicenseManagerListReceivedGrantsKey() {
  return ['#X-Amz-Target=AWSLicenseManager.ListReceivedGrants'] as const
}

export function getXAmzTargetAWSLicenseManagerListReceivedGrantsForOrganizationKey() {
  return ['#X-Amz-Target=AWSLicenseManager.ListReceivedGrantsForOrganization'] as const
}

export function getXAmzTargetAWSLicenseManagerListReceivedLicensesKey() {
  return ['#X-Amz-Target=AWSLicenseManager.ListReceivedLicenses'] as const
}

export function getXAmzTargetAWSLicenseManagerListReceivedLicensesForOrganizationKey() {
  return ['#X-Amz-Target=AWSLicenseManager.ListReceivedLicensesForOrganization'] as const
}

export function getXAmzTargetAWSLicenseManagerListResourceInventoryKey() {
  return ['#X-Amz-Target=AWSLicenseManager.ListResourceInventory'] as const
}

export function getXAmzTargetAWSLicenseManagerListTagsForResourceKey() {
  return ['#X-Amz-Target=AWSLicenseManager.ListTagsForResource'] as const
}

export function getXAmzTargetAWSLicenseManagerListTokensKey() {
  return ['#X-Amz-Target=AWSLicenseManager.ListTokens'] as const
}

export function getXAmzTargetAWSLicenseManagerListUsageForLicenseConfigurationKey() {
  return ['#X-Amz-Target=AWSLicenseManager.ListUsageForLicenseConfiguration'] as const
}

export function getXAmzTargetAWSLicenseManagerRejectGrantKey() {
  return ['#X-Amz-Target=AWSLicenseManager.RejectGrant'] as const
}

export function getXAmzTargetAWSLicenseManagerTagResourceKey() {
  return ['#X-Amz-Target=AWSLicenseManager.TagResource'] as const
}

export function getXAmzTargetAWSLicenseManagerUntagResourceKey() {
  return ['#X-Amz-Target=AWSLicenseManager.UntagResource'] as const
}

export function getXAmzTargetAWSLicenseManagerUpdateLicenseConfigurationKey() {
  return ['#X-Amz-Target=AWSLicenseManager.UpdateLicenseConfiguration'] as const
}

export function getXAmzTargetAWSLicenseManagerUpdateLicenseManagerReportGeneratorKey() {
  return ['#X-Amz-Target=AWSLicenseManager.UpdateLicenseManagerReportGenerator'] as const
}

export function getXAmzTargetAWSLicenseManagerUpdateLicenseSpecificationsForResourceKey() {
  return ['#X-Amz-Target=AWSLicenseManager.UpdateLicenseSpecificationsForResource'] as const
}

export function getXAmzTargetAWSLicenseManagerUpdateServiceSettingsKey() {
  return ['#X-Amz-Target=AWSLicenseManager.UpdateServiceSettings'] as const
}

export function getPostXAmzTargetAWSLicenseManagerAcceptGrantKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.AcceptGrant',
    '/#X-Amz-Target=AWSLicenseManager.AcceptGrant',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLicenseManagerAcceptGrant<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSLicenseManager.AcceptGrant']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSLicenseManager.AcceptGrant']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSLicenseManagerAcceptGrantKey()
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
            (typeof client)['#X-Amz-Target=AWSLicenseManager.AcceptGrant']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSLicenseManager.AcceptGrant'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLicenseManagerCheckInLicenseKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.CheckInLicense',
    '/#X-Amz-Target=AWSLicenseManager.CheckInLicense',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLicenseManagerCheckInLicense<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSLicenseManager.CheckInLicense']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSLicenseManager.CheckInLicense']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSLicenseManagerCheckInLicenseKey()
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
            (typeof client)['#X-Amz-Target=AWSLicenseManager.CheckInLicense']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSLicenseManager.CheckInLicense'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLicenseManagerCheckoutBorrowLicenseKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.CheckoutBorrowLicense',
    '/#X-Amz-Target=AWSLicenseManager.CheckoutBorrowLicense',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLicenseManagerCheckoutBorrowLicense<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSLicenseManager.CheckoutBorrowLicense']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLicenseManager.CheckoutBorrowLicense']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSLicenseManagerCheckoutBorrowLicenseKey()
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
            (typeof client)['#X-Amz-Target=AWSLicenseManager.CheckoutBorrowLicense']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSLicenseManager.CheckoutBorrowLicense'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLicenseManagerCheckoutLicenseKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.CheckoutLicense',
    '/#X-Amz-Target=AWSLicenseManager.CheckoutLicense',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLicenseManagerCheckoutLicense<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSLicenseManager.CheckoutLicense']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSLicenseManager.CheckoutLicense']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSLicenseManagerCheckoutLicenseKey()
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
            (typeof client)['#X-Amz-Target=AWSLicenseManager.CheckoutLicense']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSLicenseManager.CheckoutLicense'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLicenseManagerCreateGrantKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.CreateGrant',
    '/#X-Amz-Target=AWSLicenseManager.CreateGrant',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLicenseManagerCreateGrant<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSLicenseManager.CreateGrant']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSLicenseManager.CreateGrant']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSLicenseManagerCreateGrantKey()
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
            (typeof client)['#X-Amz-Target=AWSLicenseManager.CreateGrant']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSLicenseManager.CreateGrant'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLicenseManagerCreateGrantVersionKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.CreateGrantVersion',
    '/#X-Amz-Target=AWSLicenseManager.CreateGrantVersion',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLicenseManagerCreateGrantVersion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSLicenseManager.CreateGrantVersion']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSLicenseManager.CreateGrantVersion']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSLicenseManagerCreateGrantVersionKey()
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
            (typeof client)['#X-Amz-Target=AWSLicenseManager.CreateGrantVersion']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSLicenseManager.CreateGrantVersion'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLicenseManagerCreateLicenseKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.CreateLicense',
    '/#X-Amz-Target=AWSLicenseManager.CreateLicense',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLicenseManagerCreateLicense<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSLicenseManager.CreateLicense']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSLicenseManager.CreateLicense']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSLicenseManagerCreateLicenseKey()
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
            (typeof client)['#X-Amz-Target=AWSLicenseManager.CreateLicense']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSLicenseManager.CreateLicense'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLicenseManagerCreateLicenseConfigurationKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.CreateLicenseConfiguration',
    '/#X-Amz-Target=AWSLicenseManager.CreateLicenseConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLicenseManagerCreateLicenseConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSLicenseManager.CreateLicenseConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLicenseManager.CreateLicenseConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSLicenseManagerCreateLicenseConfigurationKey()
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
            (typeof client)['#X-Amz-Target=AWSLicenseManager.CreateLicenseConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSLicenseManager.CreateLicenseConfiguration'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLicenseManagerCreateLicenseConversionTaskForResourceKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.CreateLicenseConversionTaskForResource',
    '/#X-Amz-Target=AWSLicenseManager.CreateLicenseConversionTaskForResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLicenseManagerCreateLicenseConversionTaskForResource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSLicenseManager.CreateLicenseConversionTaskForResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLicenseManager.CreateLicenseConversionTaskForResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSLicenseManagerCreateLicenseConversionTaskForResourceKey()
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
            (typeof client)['#X-Amz-Target=AWSLicenseManager.CreateLicenseConversionTaskForResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSLicenseManager.CreateLicenseConversionTaskForResource'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLicenseManagerCreateLicenseManagerReportGeneratorKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.CreateLicenseManagerReportGenerator',
    '/#X-Amz-Target=AWSLicenseManager.CreateLicenseManagerReportGenerator',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLicenseManagerCreateLicenseManagerReportGenerator<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSLicenseManager.CreateLicenseManagerReportGenerator']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLicenseManager.CreateLicenseManagerReportGenerator']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSLicenseManagerCreateLicenseManagerReportGeneratorKey()
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
            (typeof client)['#X-Amz-Target=AWSLicenseManager.CreateLicenseManagerReportGenerator']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSLicenseManager.CreateLicenseManagerReportGenerator'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLicenseManagerCreateLicenseVersionKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.CreateLicenseVersion',
    '/#X-Amz-Target=AWSLicenseManager.CreateLicenseVersion',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLicenseManagerCreateLicenseVersion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSLicenseManager.CreateLicenseVersion']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLicenseManager.CreateLicenseVersion']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSLicenseManagerCreateLicenseVersionKey()
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
            (typeof client)['#X-Amz-Target=AWSLicenseManager.CreateLicenseVersion']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSLicenseManager.CreateLicenseVersion'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLicenseManagerCreateTokenKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.CreateToken',
    '/#X-Amz-Target=AWSLicenseManager.CreateToken',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLicenseManagerCreateToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSLicenseManager.CreateToken']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSLicenseManager.CreateToken']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSLicenseManagerCreateTokenKey()
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
            (typeof client)['#X-Amz-Target=AWSLicenseManager.CreateToken']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSLicenseManager.CreateToken'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLicenseManagerDeleteGrantKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.DeleteGrant',
    '/#X-Amz-Target=AWSLicenseManager.DeleteGrant',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLicenseManagerDeleteGrant<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSLicenseManager.DeleteGrant']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSLicenseManager.DeleteGrant']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSLicenseManagerDeleteGrantKey()
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
            (typeof client)['#X-Amz-Target=AWSLicenseManager.DeleteGrant']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSLicenseManager.DeleteGrant'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLicenseManagerDeleteLicenseKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.DeleteLicense',
    '/#X-Amz-Target=AWSLicenseManager.DeleteLicense',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLicenseManagerDeleteLicense<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSLicenseManager.DeleteLicense']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSLicenseManager.DeleteLicense']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSLicenseManagerDeleteLicenseKey()
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
            (typeof client)['#X-Amz-Target=AWSLicenseManager.DeleteLicense']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSLicenseManager.DeleteLicense'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLicenseManagerDeleteLicenseConfigurationKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.DeleteLicenseConfiguration',
    '/#X-Amz-Target=AWSLicenseManager.DeleteLicenseConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLicenseManagerDeleteLicenseConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSLicenseManager.DeleteLicenseConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLicenseManager.DeleteLicenseConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSLicenseManagerDeleteLicenseConfigurationKey()
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
            (typeof client)['#X-Amz-Target=AWSLicenseManager.DeleteLicenseConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSLicenseManager.DeleteLicenseConfiguration'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLicenseManagerDeleteLicenseManagerReportGeneratorKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.DeleteLicenseManagerReportGenerator',
    '/#X-Amz-Target=AWSLicenseManager.DeleteLicenseManagerReportGenerator',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLicenseManagerDeleteLicenseManagerReportGenerator<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSLicenseManager.DeleteLicenseManagerReportGenerator']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLicenseManager.DeleteLicenseManagerReportGenerator']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSLicenseManagerDeleteLicenseManagerReportGeneratorKey()
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
            (typeof client)['#X-Amz-Target=AWSLicenseManager.DeleteLicenseManagerReportGenerator']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSLicenseManager.DeleteLicenseManagerReportGenerator'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLicenseManagerDeleteTokenKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.DeleteToken',
    '/#X-Amz-Target=AWSLicenseManager.DeleteToken',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLicenseManagerDeleteToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSLicenseManager.DeleteToken']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSLicenseManager.DeleteToken']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSLicenseManagerDeleteTokenKey()
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
            (typeof client)['#X-Amz-Target=AWSLicenseManager.DeleteToken']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSLicenseManager.DeleteToken'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLicenseManagerExtendLicenseConsumptionKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.ExtendLicenseConsumption',
    '/#X-Amz-Target=AWSLicenseManager.ExtendLicenseConsumption',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLicenseManagerExtendLicenseConsumption<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSLicenseManager.ExtendLicenseConsumption']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLicenseManager.ExtendLicenseConsumption']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSLicenseManagerExtendLicenseConsumptionKey()
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
            (typeof client)['#X-Amz-Target=AWSLicenseManager.ExtendLicenseConsumption']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSLicenseManager.ExtendLicenseConsumption'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLicenseManagerGetAccessTokenKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.GetAccessToken',
    '/#X-Amz-Target=AWSLicenseManager.GetAccessToken',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLicenseManagerGetAccessToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSLicenseManager.GetAccessToken']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSLicenseManager.GetAccessToken']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSLicenseManagerGetAccessTokenKey()
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
            (typeof client)['#X-Amz-Target=AWSLicenseManager.GetAccessToken']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSLicenseManager.GetAccessToken'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLicenseManagerGetGrantKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.GetGrant',
    '/#X-Amz-Target=AWSLicenseManager.GetGrant',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLicenseManagerGetGrant<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSLicenseManager.GetGrant']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSLicenseManager.GetGrant']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSLicenseManagerGetGrantKey()
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
            (typeof client)['#X-Amz-Target=AWSLicenseManager.GetGrant']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AWSLicenseManager.GetGrant'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLicenseManagerGetLicenseKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.GetLicense',
    '/#X-Amz-Target=AWSLicenseManager.GetLicense',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLicenseManagerGetLicense<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSLicenseManager.GetLicense']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSLicenseManager.GetLicense']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSLicenseManagerGetLicenseKey()
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
            (typeof client)['#X-Amz-Target=AWSLicenseManager.GetLicense']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSLicenseManager.GetLicense'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLicenseManagerGetLicenseConfigurationKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.GetLicenseConfiguration',
    '/#X-Amz-Target=AWSLicenseManager.GetLicenseConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLicenseManagerGetLicenseConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSLicenseManager.GetLicenseConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLicenseManager.GetLicenseConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSLicenseManagerGetLicenseConfigurationKey()
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
            (typeof client)['#X-Amz-Target=AWSLicenseManager.GetLicenseConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSLicenseManager.GetLicenseConfiguration'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLicenseManagerGetLicenseConversionTaskKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.GetLicenseConversionTask',
    '/#X-Amz-Target=AWSLicenseManager.GetLicenseConversionTask',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLicenseManagerGetLicenseConversionTask<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSLicenseManager.GetLicenseConversionTask']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLicenseManager.GetLicenseConversionTask']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSLicenseManagerGetLicenseConversionTaskKey()
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
            (typeof client)['#X-Amz-Target=AWSLicenseManager.GetLicenseConversionTask']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSLicenseManager.GetLicenseConversionTask'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLicenseManagerGetLicenseManagerReportGeneratorKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.GetLicenseManagerReportGenerator',
    '/#X-Amz-Target=AWSLicenseManager.GetLicenseManagerReportGenerator',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLicenseManagerGetLicenseManagerReportGenerator<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSLicenseManager.GetLicenseManagerReportGenerator']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLicenseManager.GetLicenseManagerReportGenerator']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSLicenseManagerGetLicenseManagerReportGeneratorKey()
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
            (typeof client)['#X-Amz-Target=AWSLicenseManager.GetLicenseManagerReportGenerator']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSLicenseManager.GetLicenseManagerReportGenerator'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLicenseManagerGetLicenseUsageKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.GetLicenseUsage',
    '/#X-Amz-Target=AWSLicenseManager.GetLicenseUsage',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLicenseManagerGetLicenseUsage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSLicenseManager.GetLicenseUsage']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSLicenseManager.GetLicenseUsage']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSLicenseManagerGetLicenseUsageKey()
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
            (typeof client)['#X-Amz-Target=AWSLicenseManager.GetLicenseUsage']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSLicenseManager.GetLicenseUsage'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLicenseManagerGetServiceSettingsKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.GetServiceSettings',
    '/#X-Amz-Target=AWSLicenseManager.GetServiceSettings',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLicenseManagerGetServiceSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSLicenseManager.GetServiceSettings']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSLicenseManager.GetServiceSettings']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSLicenseManagerGetServiceSettingsKey()
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
            (typeof client)['#X-Amz-Target=AWSLicenseManager.GetServiceSettings']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSLicenseManager.GetServiceSettings'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLicenseManagerListAssociationsForLicenseConfigurationKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.ListAssociationsForLicenseConfiguration',
    '/#X-Amz-Target=AWSLicenseManager.ListAssociationsForLicenseConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLicenseManagerListAssociationsForLicenseConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSLicenseManager.ListAssociationsForLicenseConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLicenseManager.ListAssociationsForLicenseConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSLicenseManagerListAssociationsForLicenseConfigurationKey()
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
            (typeof client)['#X-Amz-Target=AWSLicenseManager.ListAssociationsForLicenseConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSLicenseManager.ListAssociationsForLicenseConfiguration'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLicenseManagerListDistributedGrantsKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.ListDistributedGrants',
    '/#X-Amz-Target=AWSLicenseManager.ListDistributedGrants',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLicenseManagerListDistributedGrants<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSLicenseManager.ListDistributedGrants']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLicenseManager.ListDistributedGrants']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSLicenseManagerListDistributedGrantsKey()
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
            (typeof client)['#X-Amz-Target=AWSLicenseManager.ListDistributedGrants']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSLicenseManager.ListDistributedGrants'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLicenseManagerListFailuresForLicenseConfigurationOperationsKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.ListFailuresForLicenseConfigurationOperations',
    '/#X-Amz-Target=AWSLicenseManager.ListFailuresForLicenseConfigurationOperations',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLicenseManagerListFailuresForLicenseConfigurationOperations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSLicenseManager.ListFailuresForLicenseConfigurationOperations']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLicenseManager.ListFailuresForLicenseConfigurationOperations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetAWSLicenseManagerListFailuresForLicenseConfigurationOperationsKey()
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
            (typeof client)['#X-Amz-Target=AWSLicenseManager.ListFailuresForLicenseConfigurationOperations']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AWSLicenseManager.ListFailuresForLicenseConfigurationOperations'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLicenseManagerListLicenseConfigurationsKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.ListLicenseConfigurations',
    '/#X-Amz-Target=AWSLicenseManager.ListLicenseConfigurations',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLicenseManagerListLicenseConfigurations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSLicenseManager.ListLicenseConfigurations']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLicenseManager.ListLicenseConfigurations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSLicenseManagerListLicenseConfigurationsKey()
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
            (typeof client)['#X-Amz-Target=AWSLicenseManager.ListLicenseConfigurations']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSLicenseManager.ListLicenseConfigurations'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLicenseManagerListLicenseConversionTasksKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.ListLicenseConversionTasks',
    '/#X-Amz-Target=AWSLicenseManager.ListLicenseConversionTasks',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLicenseManagerListLicenseConversionTasks<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSLicenseManager.ListLicenseConversionTasks']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLicenseManager.ListLicenseConversionTasks']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSLicenseManagerListLicenseConversionTasksKey()
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
            (typeof client)['#X-Amz-Target=AWSLicenseManager.ListLicenseConversionTasks']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSLicenseManager.ListLicenseConversionTasks'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLicenseManagerListLicenseManagerReportGeneratorsKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.ListLicenseManagerReportGenerators',
    '/#X-Amz-Target=AWSLicenseManager.ListLicenseManagerReportGenerators',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLicenseManagerListLicenseManagerReportGenerators<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSLicenseManager.ListLicenseManagerReportGenerators']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLicenseManager.ListLicenseManagerReportGenerators']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSLicenseManagerListLicenseManagerReportGeneratorsKey()
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
            (typeof client)['#X-Amz-Target=AWSLicenseManager.ListLicenseManagerReportGenerators']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSLicenseManager.ListLicenseManagerReportGenerators'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLicenseManagerListLicenseSpecificationsForResourceKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.ListLicenseSpecificationsForResource',
    '/#X-Amz-Target=AWSLicenseManager.ListLicenseSpecificationsForResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLicenseManagerListLicenseSpecificationsForResource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSLicenseManager.ListLicenseSpecificationsForResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLicenseManager.ListLicenseSpecificationsForResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSLicenseManagerListLicenseSpecificationsForResourceKey()
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
            (typeof client)['#X-Amz-Target=AWSLicenseManager.ListLicenseSpecificationsForResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSLicenseManager.ListLicenseSpecificationsForResource'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLicenseManagerListLicenseVersionsKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.ListLicenseVersions',
    '/#X-Amz-Target=AWSLicenseManager.ListLicenseVersions',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLicenseManagerListLicenseVersions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSLicenseManager.ListLicenseVersions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLicenseManager.ListLicenseVersions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSLicenseManagerListLicenseVersionsKey()
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
            (typeof client)['#X-Amz-Target=AWSLicenseManager.ListLicenseVersions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSLicenseManager.ListLicenseVersions'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLicenseManagerListLicensesKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.ListLicenses',
    '/#X-Amz-Target=AWSLicenseManager.ListLicenses',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLicenseManagerListLicenses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSLicenseManager.ListLicenses']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSLicenseManager.ListLicenses']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSLicenseManagerListLicensesKey()
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
            (typeof client)['#X-Amz-Target=AWSLicenseManager.ListLicenses']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSLicenseManager.ListLicenses'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLicenseManagerListReceivedGrantsKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.ListReceivedGrants',
    '/#X-Amz-Target=AWSLicenseManager.ListReceivedGrants',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLicenseManagerListReceivedGrants<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSLicenseManager.ListReceivedGrants']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSLicenseManager.ListReceivedGrants']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSLicenseManagerListReceivedGrantsKey()
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
            (typeof client)['#X-Amz-Target=AWSLicenseManager.ListReceivedGrants']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSLicenseManager.ListReceivedGrants'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLicenseManagerListReceivedGrantsForOrganizationKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.ListReceivedGrantsForOrganization',
    '/#X-Amz-Target=AWSLicenseManager.ListReceivedGrantsForOrganization',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLicenseManagerListReceivedGrantsForOrganization<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSLicenseManager.ListReceivedGrantsForOrganization']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLicenseManager.ListReceivedGrantsForOrganization']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSLicenseManagerListReceivedGrantsForOrganizationKey()
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
            (typeof client)['#X-Amz-Target=AWSLicenseManager.ListReceivedGrantsForOrganization']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSLicenseManager.ListReceivedGrantsForOrganization'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLicenseManagerListReceivedLicensesKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.ListReceivedLicenses',
    '/#X-Amz-Target=AWSLicenseManager.ListReceivedLicenses',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLicenseManagerListReceivedLicenses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSLicenseManager.ListReceivedLicenses']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLicenseManager.ListReceivedLicenses']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSLicenseManagerListReceivedLicensesKey()
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
            (typeof client)['#X-Amz-Target=AWSLicenseManager.ListReceivedLicenses']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSLicenseManager.ListReceivedLicenses'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLicenseManagerListReceivedLicensesForOrganizationKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.ListReceivedLicensesForOrganization',
    '/#X-Amz-Target=AWSLicenseManager.ListReceivedLicensesForOrganization',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLicenseManagerListReceivedLicensesForOrganization<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSLicenseManager.ListReceivedLicensesForOrganization']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLicenseManager.ListReceivedLicensesForOrganization']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSLicenseManagerListReceivedLicensesForOrganizationKey()
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
            (typeof client)['#X-Amz-Target=AWSLicenseManager.ListReceivedLicensesForOrganization']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSLicenseManager.ListReceivedLicensesForOrganization'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLicenseManagerListResourceInventoryKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.ListResourceInventory',
    '/#X-Amz-Target=AWSLicenseManager.ListResourceInventory',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLicenseManagerListResourceInventory<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSLicenseManager.ListResourceInventory']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLicenseManager.ListResourceInventory']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSLicenseManagerListResourceInventoryKey()
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
            (typeof client)['#X-Amz-Target=AWSLicenseManager.ListResourceInventory']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSLicenseManager.ListResourceInventory'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLicenseManagerListTagsForResourceKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.ListTagsForResource',
    '/#X-Amz-Target=AWSLicenseManager.ListTagsForResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLicenseManagerListTagsForResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSLicenseManager.ListTagsForResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLicenseManager.ListTagsForResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSLicenseManagerListTagsForResourceKey()
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
            (typeof client)['#X-Amz-Target=AWSLicenseManager.ListTagsForResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSLicenseManager.ListTagsForResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLicenseManagerListTokensKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.ListTokens',
    '/#X-Amz-Target=AWSLicenseManager.ListTokens',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLicenseManagerListTokens<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSLicenseManager.ListTokens']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSLicenseManager.ListTokens']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSLicenseManagerListTokensKey()
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
            (typeof client)['#X-Amz-Target=AWSLicenseManager.ListTokens']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSLicenseManager.ListTokens'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLicenseManagerListUsageForLicenseConfigurationKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.ListUsageForLicenseConfiguration',
    '/#X-Amz-Target=AWSLicenseManager.ListUsageForLicenseConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLicenseManagerListUsageForLicenseConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSLicenseManager.ListUsageForLicenseConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLicenseManager.ListUsageForLicenseConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSLicenseManagerListUsageForLicenseConfigurationKey()
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
            (typeof client)['#X-Amz-Target=AWSLicenseManager.ListUsageForLicenseConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSLicenseManager.ListUsageForLicenseConfiguration'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLicenseManagerRejectGrantKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.RejectGrant',
    '/#X-Amz-Target=AWSLicenseManager.RejectGrant',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLicenseManagerRejectGrant<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSLicenseManager.RejectGrant']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSLicenseManager.RejectGrant']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSLicenseManagerRejectGrantKey()
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
            (typeof client)['#X-Amz-Target=AWSLicenseManager.RejectGrant']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSLicenseManager.RejectGrant'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLicenseManagerTagResourceKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.TagResource',
    '/#X-Amz-Target=AWSLicenseManager.TagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLicenseManagerTagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSLicenseManager.TagResource']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSLicenseManager.TagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSLicenseManagerTagResourceKey()
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
            (typeof client)['#X-Amz-Target=AWSLicenseManager.TagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSLicenseManager.TagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLicenseManagerUntagResourceKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.UntagResource',
    '/#X-Amz-Target=AWSLicenseManager.UntagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLicenseManagerUntagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSLicenseManager.UntagResource']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSLicenseManager.UntagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSLicenseManagerUntagResourceKey()
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
            (typeof client)['#X-Amz-Target=AWSLicenseManager.UntagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSLicenseManager.UntagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLicenseManagerUpdateLicenseConfigurationKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.UpdateLicenseConfiguration',
    '/#X-Amz-Target=AWSLicenseManager.UpdateLicenseConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLicenseManagerUpdateLicenseConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSLicenseManager.UpdateLicenseConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLicenseManager.UpdateLicenseConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSLicenseManagerUpdateLicenseConfigurationKey()
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
            (typeof client)['#X-Amz-Target=AWSLicenseManager.UpdateLicenseConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSLicenseManager.UpdateLicenseConfiguration'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLicenseManagerUpdateLicenseManagerReportGeneratorKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.UpdateLicenseManagerReportGenerator',
    '/#X-Amz-Target=AWSLicenseManager.UpdateLicenseManagerReportGenerator',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLicenseManagerUpdateLicenseManagerReportGenerator<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSLicenseManager.UpdateLicenseManagerReportGenerator']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLicenseManager.UpdateLicenseManagerReportGenerator']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSLicenseManagerUpdateLicenseManagerReportGeneratorKey()
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
            (typeof client)['#X-Amz-Target=AWSLicenseManager.UpdateLicenseManagerReportGenerator']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSLicenseManager.UpdateLicenseManagerReportGenerator'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLicenseManagerUpdateLicenseSpecificationsForResourceKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.UpdateLicenseSpecificationsForResource',
    '/#X-Amz-Target=AWSLicenseManager.UpdateLicenseSpecificationsForResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLicenseManagerUpdateLicenseSpecificationsForResource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSLicenseManager.UpdateLicenseSpecificationsForResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLicenseManager.UpdateLicenseSpecificationsForResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSLicenseManagerUpdateLicenseSpecificationsForResourceKey()
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
            (typeof client)['#X-Amz-Target=AWSLicenseManager.UpdateLicenseSpecificationsForResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSLicenseManager.UpdateLicenseSpecificationsForResource'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLicenseManagerUpdateServiceSettingsKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.UpdateServiceSettings',
    '/#X-Amz-Target=AWSLicenseManager.UpdateServiceSettings',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLicenseManagerUpdateServiceSettings<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSLicenseManager.UpdateServiceSettings']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLicenseManager.UpdateServiceSettings']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSLicenseManagerUpdateServiceSettingsKey()
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
            (typeof client)['#X-Amz-Target=AWSLicenseManager.UpdateServiceSettings']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSLicenseManager.UpdateServiceSettings'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
