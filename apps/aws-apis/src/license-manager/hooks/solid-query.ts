import { createMutation, mutationOptions } from '@tanstack/solid-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
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

export function getPostXAmzTargetAWSLicenseManagerAcceptGrantMutationKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.AcceptGrant',
    '/#X-Amz-Target=AWSLicenseManager.AcceptGrant',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLicenseManagerAcceptGrantMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSLicenseManager.AcceptGrant']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSLicenseManagerAcceptGrantMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLicenseManager.AcceptGrant']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLicenseManager.AcceptGrant'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSLicenseManagerAcceptGrant<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=AWSLicenseManager.AcceptGrant']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AWSLicenseManager.AcceptGrant']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSLicenseManagerAcceptGrantMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSLicenseManagerCheckInLicenseMutationKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.CheckInLicense',
    '/#X-Amz-Target=AWSLicenseManager.CheckInLicense',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLicenseManagerCheckInLicenseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSLicenseManager.CheckInLicense']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSLicenseManagerCheckInLicenseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLicenseManager.CheckInLicense']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLicenseManager.CheckInLicense'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSLicenseManagerCheckInLicense<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=AWSLicenseManager.CheckInLicense']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSLicenseManager.CheckInLicense']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSLicenseManagerCheckInLicenseMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSLicenseManagerCheckoutBorrowLicenseMutationKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.CheckoutBorrowLicense',
    '/#X-Amz-Target=AWSLicenseManager.CheckoutBorrowLicense',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLicenseManagerCheckoutBorrowLicenseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLicenseManager.CheckoutBorrowLicense']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSLicenseManagerCheckoutBorrowLicenseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLicenseManager.CheckoutBorrowLicense']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLicenseManager.CheckoutBorrowLicense'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSLicenseManagerCheckoutBorrowLicense<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSLicenseManager.CheckoutBorrowLicense']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSLicenseManagerCheckoutBorrowLicenseMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSLicenseManagerCheckoutLicenseMutationKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.CheckoutLicense',
    '/#X-Amz-Target=AWSLicenseManager.CheckoutLicense',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLicenseManagerCheckoutLicenseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSLicenseManager.CheckoutLicense']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSLicenseManagerCheckoutLicenseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLicenseManager.CheckoutLicense']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLicenseManager.CheckoutLicense'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSLicenseManagerCheckoutLicense<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=AWSLicenseManager.CheckoutLicense']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSLicenseManager.CheckoutLicense']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSLicenseManagerCheckoutLicenseMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSLicenseManagerCreateGrantMutationKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.CreateGrant',
    '/#X-Amz-Target=AWSLicenseManager.CreateGrant',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLicenseManagerCreateGrantMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSLicenseManager.CreateGrant']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSLicenseManagerCreateGrantMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLicenseManager.CreateGrant']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLicenseManager.CreateGrant'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSLicenseManagerCreateGrant<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=AWSLicenseManager.CreateGrant']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AWSLicenseManager.CreateGrant']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSLicenseManagerCreateGrantMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSLicenseManagerCreateGrantVersionMutationKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.CreateGrantVersion',
    '/#X-Amz-Target=AWSLicenseManager.CreateGrantVersion',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLicenseManagerCreateGrantVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLicenseManager.CreateGrantVersion']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSLicenseManagerCreateGrantVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLicenseManager.CreateGrantVersion']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLicenseManager.CreateGrantVersion'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSLicenseManagerCreateGrantVersion<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSLicenseManager.CreateGrantVersion']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSLicenseManagerCreateGrantVersionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSLicenseManagerCreateLicenseMutationKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.CreateLicense',
    '/#X-Amz-Target=AWSLicenseManager.CreateLicense',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLicenseManagerCreateLicenseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSLicenseManager.CreateLicense']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSLicenseManagerCreateLicenseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLicenseManager.CreateLicense']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLicenseManager.CreateLicense'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSLicenseManagerCreateLicense<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=AWSLicenseManager.CreateLicense']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSLicenseManager.CreateLicense']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSLicenseManagerCreateLicenseMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSLicenseManagerCreateLicenseConfigurationMutationKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.CreateLicenseConfiguration',
    '/#X-Amz-Target=AWSLicenseManager.CreateLicenseConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLicenseManagerCreateLicenseConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLicenseManager.CreateLicenseConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSLicenseManagerCreateLicenseConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLicenseManager.CreateLicenseConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLicenseManager.CreateLicenseConfiguration'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSLicenseManagerCreateLicenseConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSLicenseManager.CreateLicenseConfiguration']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSLicenseManagerCreateLicenseConfigurationMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSLicenseManagerCreateLicenseConversionTaskForResourceMutationKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.CreateLicenseConversionTaskForResource',
    '/#X-Amz-Target=AWSLicenseManager.CreateLicenseConversionTaskForResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLicenseManagerCreateLicenseConversionTaskForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLicenseManager.CreateLicenseConversionTaskForResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSLicenseManagerCreateLicenseConversionTaskForResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLicenseManager.CreateLicenseConversionTaskForResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLicenseManager.CreateLicenseConversionTaskForResource'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAWSLicenseManagerCreateLicenseConversionTaskForResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSLicenseManager.CreateLicenseConversionTaskForResource']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSLicenseManagerCreateLicenseConversionTaskForResourceMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSLicenseManagerCreateLicenseManagerReportGeneratorMutationKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.CreateLicenseManagerReportGenerator',
    '/#X-Amz-Target=AWSLicenseManager.CreateLicenseManagerReportGenerator',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLicenseManagerCreateLicenseManagerReportGeneratorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLicenseManager.CreateLicenseManagerReportGenerator']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSLicenseManagerCreateLicenseManagerReportGeneratorMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLicenseManager.CreateLicenseManagerReportGenerator']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLicenseManager.CreateLicenseManagerReportGenerator'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAWSLicenseManagerCreateLicenseManagerReportGenerator<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSLicenseManager.CreateLicenseManagerReportGenerator']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSLicenseManagerCreateLicenseManagerReportGeneratorMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSLicenseManagerCreateLicenseVersionMutationKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.CreateLicenseVersion',
    '/#X-Amz-Target=AWSLicenseManager.CreateLicenseVersion',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLicenseManagerCreateLicenseVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLicenseManager.CreateLicenseVersion']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSLicenseManagerCreateLicenseVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLicenseManager.CreateLicenseVersion']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLicenseManager.CreateLicenseVersion'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSLicenseManagerCreateLicenseVersion<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSLicenseManager.CreateLicenseVersion']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSLicenseManagerCreateLicenseVersionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSLicenseManagerCreateTokenMutationKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.CreateToken',
    '/#X-Amz-Target=AWSLicenseManager.CreateToken',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLicenseManagerCreateTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSLicenseManager.CreateToken']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSLicenseManagerCreateTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLicenseManager.CreateToken']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLicenseManager.CreateToken'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSLicenseManagerCreateToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=AWSLicenseManager.CreateToken']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AWSLicenseManager.CreateToken']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSLicenseManagerCreateTokenMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSLicenseManagerDeleteGrantMutationKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.DeleteGrant',
    '/#X-Amz-Target=AWSLicenseManager.DeleteGrant',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLicenseManagerDeleteGrantMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSLicenseManager.DeleteGrant']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSLicenseManagerDeleteGrantMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLicenseManager.DeleteGrant']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLicenseManager.DeleteGrant'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSLicenseManagerDeleteGrant<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=AWSLicenseManager.DeleteGrant']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AWSLicenseManager.DeleteGrant']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSLicenseManagerDeleteGrantMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSLicenseManagerDeleteLicenseMutationKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.DeleteLicense',
    '/#X-Amz-Target=AWSLicenseManager.DeleteLicense',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLicenseManagerDeleteLicenseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSLicenseManager.DeleteLicense']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSLicenseManagerDeleteLicenseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLicenseManager.DeleteLicense']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLicenseManager.DeleteLicense'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSLicenseManagerDeleteLicense<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=AWSLicenseManager.DeleteLicense']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSLicenseManager.DeleteLicense']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSLicenseManagerDeleteLicenseMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSLicenseManagerDeleteLicenseConfigurationMutationKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.DeleteLicenseConfiguration',
    '/#X-Amz-Target=AWSLicenseManager.DeleteLicenseConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLicenseManagerDeleteLicenseConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLicenseManager.DeleteLicenseConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSLicenseManagerDeleteLicenseConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLicenseManager.DeleteLicenseConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLicenseManager.DeleteLicenseConfiguration'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSLicenseManagerDeleteLicenseConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSLicenseManager.DeleteLicenseConfiguration']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSLicenseManagerDeleteLicenseConfigurationMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSLicenseManagerDeleteLicenseManagerReportGeneratorMutationKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.DeleteLicenseManagerReportGenerator',
    '/#X-Amz-Target=AWSLicenseManager.DeleteLicenseManagerReportGenerator',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLicenseManagerDeleteLicenseManagerReportGeneratorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLicenseManager.DeleteLicenseManagerReportGenerator']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSLicenseManagerDeleteLicenseManagerReportGeneratorMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLicenseManager.DeleteLicenseManagerReportGenerator']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLicenseManager.DeleteLicenseManagerReportGenerator'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAWSLicenseManagerDeleteLicenseManagerReportGenerator<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSLicenseManager.DeleteLicenseManagerReportGenerator']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSLicenseManagerDeleteLicenseManagerReportGeneratorMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSLicenseManagerDeleteTokenMutationKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.DeleteToken',
    '/#X-Amz-Target=AWSLicenseManager.DeleteToken',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLicenseManagerDeleteTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSLicenseManager.DeleteToken']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSLicenseManagerDeleteTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLicenseManager.DeleteToken']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLicenseManager.DeleteToken'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSLicenseManagerDeleteToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=AWSLicenseManager.DeleteToken']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AWSLicenseManager.DeleteToken']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSLicenseManagerDeleteTokenMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSLicenseManagerExtendLicenseConsumptionMutationKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.ExtendLicenseConsumption',
    '/#X-Amz-Target=AWSLicenseManager.ExtendLicenseConsumption',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLicenseManagerExtendLicenseConsumptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLicenseManager.ExtendLicenseConsumption']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSLicenseManagerExtendLicenseConsumptionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLicenseManager.ExtendLicenseConsumption']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLicenseManager.ExtendLicenseConsumption'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSLicenseManagerExtendLicenseConsumption<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSLicenseManager.ExtendLicenseConsumption']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSLicenseManagerExtendLicenseConsumptionMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSLicenseManagerGetAccessTokenMutationKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.GetAccessToken',
    '/#X-Amz-Target=AWSLicenseManager.GetAccessToken',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLicenseManagerGetAccessTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSLicenseManager.GetAccessToken']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSLicenseManagerGetAccessTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLicenseManager.GetAccessToken']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLicenseManager.GetAccessToken'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSLicenseManagerGetAccessToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=AWSLicenseManager.GetAccessToken']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSLicenseManager.GetAccessToken']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSLicenseManagerGetAccessTokenMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSLicenseManagerGetGrantMutationKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.GetGrant',
    '/#X-Amz-Target=AWSLicenseManager.GetGrant',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLicenseManagerGetGrantMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSLicenseManager.GetGrant']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSLicenseManager.GetGrant']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSLicenseManagerGetGrantMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSLicenseManager.GetGrant']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSLicenseManager.GetGrant'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetAWSLicenseManagerGetGrant<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#X-Amz-Target=AWSLicenseManager.GetGrant']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AWSLicenseManager.GetGrant']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSLicenseManagerGetGrantMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSLicenseManagerGetLicenseMutationKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.GetLicense',
    '/#X-Amz-Target=AWSLicenseManager.GetLicense',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLicenseManagerGetLicenseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSLicenseManager.GetLicense']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSLicenseManagerGetLicenseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLicenseManager.GetLicense']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLicenseManager.GetLicense'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSLicenseManagerGetLicense<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<(typeof client)['#X-Amz-Target=AWSLicenseManager.GetLicense']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSLicenseManagerGetLicenseMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSLicenseManagerGetLicenseConfigurationMutationKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.GetLicenseConfiguration',
    '/#X-Amz-Target=AWSLicenseManager.GetLicenseConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLicenseManagerGetLicenseConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLicenseManager.GetLicenseConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSLicenseManagerGetLicenseConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLicenseManager.GetLicenseConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLicenseManager.GetLicenseConfiguration'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSLicenseManagerGetLicenseConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSLicenseManager.GetLicenseConfiguration']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSLicenseManagerGetLicenseConfigurationMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSLicenseManagerGetLicenseConversionTaskMutationKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.GetLicenseConversionTask',
    '/#X-Amz-Target=AWSLicenseManager.GetLicenseConversionTask',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLicenseManagerGetLicenseConversionTaskMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLicenseManager.GetLicenseConversionTask']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSLicenseManagerGetLicenseConversionTaskMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLicenseManager.GetLicenseConversionTask']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLicenseManager.GetLicenseConversionTask'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSLicenseManagerGetLicenseConversionTask<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSLicenseManager.GetLicenseConversionTask']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSLicenseManagerGetLicenseConversionTaskMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSLicenseManagerGetLicenseManagerReportGeneratorMutationKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.GetLicenseManagerReportGenerator',
    '/#X-Amz-Target=AWSLicenseManager.GetLicenseManagerReportGenerator',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLicenseManagerGetLicenseManagerReportGeneratorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLicenseManager.GetLicenseManagerReportGenerator']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSLicenseManagerGetLicenseManagerReportGeneratorMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLicenseManager.GetLicenseManagerReportGenerator']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLicenseManager.GetLicenseManagerReportGenerator'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAWSLicenseManagerGetLicenseManagerReportGenerator<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSLicenseManager.GetLicenseManagerReportGenerator']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSLicenseManagerGetLicenseManagerReportGeneratorMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSLicenseManagerGetLicenseUsageMutationKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.GetLicenseUsage',
    '/#X-Amz-Target=AWSLicenseManager.GetLicenseUsage',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLicenseManagerGetLicenseUsageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSLicenseManager.GetLicenseUsage']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSLicenseManagerGetLicenseUsageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLicenseManager.GetLicenseUsage']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLicenseManager.GetLicenseUsage'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSLicenseManagerGetLicenseUsage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=AWSLicenseManager.GetLicenseUsage']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSLicenseManager.GetLicenseUsage']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSLicenseManagerGetLicenseUsageMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSLicenseManagerGetServiceSettingsMutationKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.GetServiceSettings',
    '/#X-Amz-Target=AWSLicenseManager.GetServiceSettings',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLicenseManagerGetServiceSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLicenseManager.GetServiceSettings']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSLicenseManagerGetServiceSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLicenseManager.GetServiceSettings']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLicenseManager.GetServiceSettings'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSLicenseManagerGetServiceSettings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSLicenseManager.GetServiceSettings']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSLicenseManagerGetServiceSettingsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSLicenseManagerListAssociationsForLicenseConfigurationMutationKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.ListAssociationsForLicenseConfiguration',
    '/#X-Amz-Target=AWSLicenseManager.ListAssociationsForLicenseConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLicenseManagerListAssociationsForLicenseConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLicenseManager.ListAssociationsForLicenseConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSLicenseManagerListAssociationsForLicenseConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLicenseManager.ListAssociationsForLicenseConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLicenseManager.ListAssociationsForLicenseConfiguration'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAWSLicenseManagerListAssociationsForLicenseConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSLicenseManager.ListAssociationsForLicenseConfiguration']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSLicenseManagerListAssociationsForLicenseConfigurationMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSLicenseManagerListDistributedGrantsMutationKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.ListDistributedGrants',
    '/#X-Amz-Target=AWSLicenseManager.ListDistributedGrants',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLicenseManagerListDistributedGrantsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLicenseManager.ListDistributedGrants']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSLicenseManagerListDistributedGrantsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLicenseManager.ListDistributedGrants']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLicenseManager.ListDistributedGrants'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSLicenseManagerListDistributedGrants<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSLicenseManager.ListDistributedGrants']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSLicenseManagerListDistributedGrantsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSLicenseManagerListFailuresForLicenseConfigurationOperationsMutationKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.ListFailuresForLicenseConfigurationOperations',
    '/#X-Amz-Target=AWSLicenseManager.ListFailuresForLicenseConfigurationOperations',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLicenseManagerListFailuresForLicenseConfigurationOperationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLicenseManager.ListFailuresForLicenseConfigurationOperations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSLicenseManagerListFailuresForLicenseConfigurationOperationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLicenseManager.ListFailuresForLicenseConfigurationOperations']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=AWSLicenseManager.ListFailuresForLicenseConfigurationOperations'
        ].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSLicenseManagerListFailuresForLicenseConfigurationOperations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSLicenseManager.ListFailuresForLicenseConfigurationOperations']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSLicenseManagerListFailuresForLicenseConfigurationOperationsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSLicenseManagerListLicenseConfigurationsMutationKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.ListLicenseConfigurations',
    '/#X-Amz-Target=AWSLicenseManager.ListLicenseConfigurations',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLicenseManagerListLicenseConfigurationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLicenseManager.ListLicenseConfigurations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSLicenseManagerListLicenseConfigurationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLicenseManager.ListLicenseConfigurations']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLicenseManager.ListLicenseConfigurations'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSLicenseManagerListLicenseConfigurations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSLicenseManager.ListLicenseConfigurations']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSLicenseManagerListLicenseConfigurationsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSLicenseManagerListLicenseConversionTasksMutationKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.ListLicenseConversionTasks',
    '/#X-Amz-Target=AWSLicenseManager.ListLicenseConversionTasks',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLicenseManagerListLicenseConversionTasksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLicenseManager.ListLicenseConversionTasks']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSLicenseManagerListLicenseConversionTasksMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLicenseManager.ListLicenseConversionTasks']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLicenseManager.ListLicenseConversionTasks'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSLicenseManagerListLicenseConversionTasks<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSLicenseManager.ListLicenseConversionTasks']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSLicenseManagerListLicenseConversionTasksMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSLicenseManagerListLicenseManagerReportGeneratorsMutationKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.ListLicenseManagerReportGenerators',
    '/#X-Amz-Target=AWSLicenseManager.ListLicenseManagerReportGenerators',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLicenseManagerListLicenseManagerReportGeneratorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLicenseManager.ListLicenseManagerReportGenerators']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSLicenseManagerListLicenseManagerReportGeneratorsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLicenseManager.ListLicenseManagerReportGenerators']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLicenseManager.ListLicenseManagerReportGenerators'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAWSLicenseManagerListLicenseManagerReportGenerators<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSLicenseManager.ListLicenseManagerReportGenerators']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSLicenseManagerListLicenseManagerReportGeneratorsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSLicenseManagerListLicenseSpecificationsForResourceMutationKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.ListLicenseSpecificationsForResource',
    '/#X-Amz-Target=AWSLicenseManager.ListLicenseSpecificationsForResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLicenseManagerListLicenseSpecificationsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLicenseManager.ListLicenseSpecificationsForResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSLicenseManagerListLicenseSpecificationsForResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLicenseManager.ListLicenseSpecificationsForResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLicenseManager.ListLicenseSpecificationsForResource'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAWSLicenseManagerListLicenseSpecificationsForResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSLicenseManager.ListLicenseSpecificationsForResource']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSLicenseManagerListLicenseSpecificationsForResourceMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSLicenseManagerListLicenseVersionsMutationKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.ListLicenseVersions',
    '/#X-Amz-Target=AWSLicenseManager.ListLicenseVersions',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLicenseManagerListLicenseVersionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLicenseManager.ListLicenseVersions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSLicenseManagerListLicenseVersionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLicenseManager.ListLicenseVersions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLicenseManager.ListLicenseVersions'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSLicenseManagerListLicenseVersions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSLicenseManager.ListLicenseVersions']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSLicenseManagerListLicenseVersionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSLicenseManagerListLicensesMutationKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.ListLicenses',
    '/#X-Amz-Target=AWSLicenseManager.ListLicenses',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLicenseManagerListLicensesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSLicenseManager.ListLicenses']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSLicenseManagerListLicensesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLicenseManager.ListLicenses']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLicenseManager.ListLicenses'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSLicenseManagerListLicenses<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=AWSLicenseManager.ListLicenses']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSLicenseManager.ListLicenses']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSLicenseManagerListLicensesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSLicenseManagerListReceivedGrantsMutationKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.ListReceivedGrants',
    '/#X-Amz-Target=AWSLicenseManager.ListReceivedGrants',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLicenseManagerListReceivedGrantsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLicenseManager.ListReceivedGrants']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSLicenseManagerListReceivedGrantsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLicenseManager.ListReceivedGrants']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLicenseManager.ListReceivedGrants'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSLicenseManagerListReceivedGrants<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSLicenseManager.ListReceivedGrants']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSLicenseManagerListReceivedGrantsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSLicenseManagerListReceivedGrantsForOrganizationMutationKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.ListReceivedGrantsForOrganization',
    '/#X-Amz-Target=AWSLicenseManager.ListReceivedGrantsForOrganization',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLicenseManagerListReceivedGrantsForOrganizationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLicenseManager.ListReceivedGrantsForOrganization']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSLicenseManagerListReceivedGrantsForOrganizationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLicenseManager.ListReceivedGrantsForOrganization']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLicenseManager.ListReceivedGrantsForOrganization'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAWSLicenseManagerListReceivedGrantsForOrganization<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSLicenseManager.ListReceivedGrantsForOrganization']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSLicenseManagerListReceivedGrantsForOrganizationMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSLicenseManagerListReceivedLicensesMutationKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.ListReceivedLicenses',
    '/#X-Amz-Target=AWSLicenseManager.ListReceivedLicenses',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLicenseManagerListReceivedLicensesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLicenseManager.ListReceivedLicenses']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSLicenseManagerListReceivedLicensesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLicenseManager.ListReceivedLicenses']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLicenseManager.ListReceivedLicenses'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSLicenseManagerListReceivedLicenses<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSLicenseManager.ListReceivedLicenses']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSLicenseManagerListReceivedLicensesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSLicenseManagerListReceivedLicensesForOrganizationMutationKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.ListReceivedLicensesForOrganization',
    '/#X-Amz-Target=AWSLicenseManager.ListReceivedLicensesForOrganization',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLicenseManagerListReceivedLicensesForOrganizationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLicenseManager.ListReceivedLicensesForOrganization']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSLicenseManagerListReceivedLicensesForOrganizationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLicenseManager.ListReceivedLicensesForOrganization']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLicenseManager.ListReceivedLicensesForOrganization'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAWSLicenseManagerListReceivedLicensesForOrganization<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSLicenseManager.ListReceivedLicensesForOrganization']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSLicenseManagerListReceivedLicensesForOrganizationMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSLicenseManagerListResourceInventoryMutationKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.ListResourceInventory',
    '/#X-Amz-Target=AWSLicenseManager.ListResourceInventory',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLicenseManagerListResourceInventoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLicenseManager.ListResourceInventory']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSLicenseManagerListResourceInventoryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLicenseManager.ListResourceInventory']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLicenseManager.ListResourceInventory'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSLicenseManagerListResourceInventory<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSLicenseManager.ListResourceInventory']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSLicenseManagerListResourceInventoryMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSLicenseManagerListTagsForResourceMutationKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.ListTagsForResource',
    '/#X-Amz-Target=AWSLicenseManager.ListTagsForResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLicenseManagerListTagsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLicenseManager.ListTagsForResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSLicenseManagerListTagsForResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLicenseManager.ListTagsForResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLicenseManager.ListTagsForResource'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSLicenseManagerListTagsForResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSLicenseManager.ListTagsForResource']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSLicenseManagerListTagsForResourceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSLicenseManagerListTokensMutationKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.ListTokens',
    '/#X-Amz-Target=AWSLicenseManager.ListTokens',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLicenseManagerListTokensMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSLicenseManager.ListTokens']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSLicenseManagerListTokensMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLicenseManager.ListTokens']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLicenseManager.ListTokens'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSLicenseManagerListTokens<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<(typeof client)['#X-Amz-Target=AWSLicenseManager.ListTokens']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSLicenseManagerListTokensMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSLicenseManagerListUsageForLicenseConfigurationMutationKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.ListUsageForLicenseConfiguration',
    '/#X-Amz-Target=AWSLicenseManager.ListUsageForLicenseConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLicenseManagerListUsageForLicenseConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLicenseManager.ListUsageForLicenseConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSLicenseManagerListUsageForLicenseConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLicenseManager.ListUsageForLicenseConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLicenseManager.ListUsageForLicenseConfiguration'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAWSLicenseManagerListUsageForLicenseConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSLicenseManager.ListUsageForLicenseConfiguration']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSLicenseManagerListUsageForLicenseConfigurationMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSLicenseManagerRejectGrantMutationKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.RejectGrant',
    '/#X-Amz-Target=AWSLicenseManager.RejectGrant',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLicenseManagerRejectGrantMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSLicenseManager.RejectGrant']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSLicenseManagerRejectGrantMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLicenseManager.RejectGrant']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLicenseManager.RejectGrant'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSLicenseManagerRejectGrant<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=AWSLicenseManager.RejectGrant']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AWSLicenseManager.RejectGrant']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSLicenseManagerRejectGrantMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSLicenseManagerTagResourceMutationKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.TagResource',
    '/#X-Amz-Target=AWSLicenseManager.TagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLicenseManagerTagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSLicenseManager.TagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSLicenseManagerTagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLicenseManager.TagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLicenseManager.TagResource'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSLicenseManagerTagResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=AWSLicenseManager.TagResource']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AWSLicenseManager.TagResource']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSLicenseManagerTagResourceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSLicenseManagerUntagResourceMutationKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.UntagResource',
    '/#X-Amz-Target=AWSLicenseManager.UntagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLicenseManagerUntagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSLicenseManager.UntagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSLicenseManagerUntagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLicenseManager.UntagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLicenseManager.UntagResource'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSLicenseManagerUntagResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=AWSLicenseManager.UntagResource']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSLicenseManager.UntagResource']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSLicenseManagerUntagResourceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSLicenseManagerUpdateLicenseConfigurationMutationKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.UpdateLicenseConfiguration',
    '/#X-Amz-Target=AWSLicenseManager.UpdateLicenseConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLicenseManagerUpdateLicenseConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLicenseManager.UpdateLicenseConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSLicenseManagerUpdateLicenseConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLicenseManager.UpdateLicenseConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLicenseManager.UpdateLicenseConfiguration'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSLicenseManagerUpdateLicenseConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSLicenseManager.UpdateLicenseConfiguration']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSLicenseManagerUpdateLicenseConfigurationMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSLicenseManagerUpdateLicenseManagerReportGeneratorMutationKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.UpdateLicenseManagerReportGenerator',
    '/#X-Amz-Target=AWSLicenseManager.UpdateLicenseManagerReportGenerator',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLicenseManagerUpdateLicenseManagerReportGeneratorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLicenseManager.UpdateLicenseManagerReportGenerator']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSLicenseManagerUpdateLicenseManagerReportGeneratorMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLicenseManager.UpdateLicenseManagerReportGenerator']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLicenseManager.UpdateLicenseManagerReportGenerator'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAWSLicenseManagerUpdateLicenseManagerReportGenerator<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSLicenseManager.UpdateLicenseManagerReportGenerator']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSLicenseManagerUpdateLicenseManagerReportGeneratorMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSLicenseManagerUpdateLicenseSpecificationsForResourceMutationKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.UpdateLicenseSpecificationsForResource',
    '/#X-Amz-Target=AWSLicenseManager.UpdateLicenseSpecificationsForResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLicenseManagerUpdateLicenseSpecificationsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLicenseManager.UpdateLicenseSpecificationsForResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSLicenseManagerUpdateLicenseSpecificationsForResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLicenseManager.UpdateLicenseSpecificationsForResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLicenseManager.UpdateLicenseSpecificationsForResource'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAWSLicenseManagerUpdateLicenseSpecificationsForResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSLicenseManager.UpdateLicenseSpecificationsForResource']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSLicenseManagerUpdateLicenseSpecificationsForResourceMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSLicenseManagerUpdateServiceSettingsMutationKey() {
  return [
    '#X-Amz-Target=AWSLicenseManager.UpdateServiceSettings',
    '/#X-Amz-Target=AWSLicenseManager.UpdateServiceSettings',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLicenseManagerUpdateServiceSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLicenseManager.UpdateServiceSettings']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSLicenseManagerUpdateServiceSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLicenseManager.UpdateServiceSettings']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLicenseManager.UpdateServiceSettings'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSLicenseManagerUpdateServiceSettings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSLicenseManager.UpdateServiceSettings']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSLicenseManagerUpdateServiceSettingsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
