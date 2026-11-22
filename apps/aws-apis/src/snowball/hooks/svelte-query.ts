import { createMutation, mutationOptions } from '@tanstack/svelte-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetAWSIESnowballJobManagementServiceCancelClusterKey() {
  return ['#X-Amz-Target=AWSIESnowballJobManagementService.CancelCluster'] as const
}

export function getXAmzTargetAWSIESnowballJobManagementServiceCancelJobKey() {
  return ['#X-Amz-Target=AWSIESnowballJobManagementService.CancelJob'] as const
}

export function getXAmzTargetAWSIESnowballJobManagementServiceCreateAddressKey() {
  return ['#X-Amz-Target=AWSIESnowballJobManagementService.CreateAddress'] as const
}

export function getXAmzTargetAWSIESnowballJobManagementServiceCreateClusterKey() {
  return ['#X-Amz-Target=AWSIESnowballJobManagementService.CreateCluster'] as const
}

export function getXAmzTargetAWSIESnowballJobManagementServiceCreateJobKey() {
  return ['#X-Amz-Target=AWSIESnowballJobManagementService.CreateJob'] as const
}

export function getXAmzTargetAWSIESnowballJobManagementServiceCreateLongTermPricingKey() {
  return ['#X-Amz-Target=AWSIESnowballJobManagementService.CreateLongTermPricing'] as const
}

export function getXAmzTargetAWSIESnowballJobManagementServiceCreateReturnShippingLabelKey() {
  return ['#X-Amz-Target=AWSIESnowballJobManagementService.CreateReturnShippingLabel'] as const
}

export function getXAmzTargetAWSIESnowballJobManagementServiceDescribeAddressKey() {
  return ['#X-Amz-Target=AWSIESnowballJobManagementService.DescribeAddress'] as const
}

export function getXAmzTargetAWSIESnowballJobManagementServiceDescribeAddressesKey() {
  return ['#X-Amz-Target=AWSIESnowballJobManagementService.DescribeAddresses'] as const
}

export function getXAmzTargetAWSIESnowballJobManagementServiceDescribeClusterKey() {
  return ['#X-Amz-Target=AWSIESnowballJobManagementService.DescribeCluster'] as const
}

export function getXAmzTargetAWSIESnowballJobManagementServiceDescribeJobKey() {
  return ['#X-Amz-Target=AWSIESnowballJobManagementService.DescribeJob'] as const
}

export function getXAmzTargetAWSIESnowballJobManagementServiceDescribeReturnShippingLabelKey() {
  return ['#X-Amz-Target=AWSIESnowballJobManagementService.DescribeReturnShippingLabel'] as const
}

export function getXAmzTargetAWSIESnowballJobManagementServiceGetJobManifestKey() {
  return ['#X-Amz-Target=AWSIESnowballJobManagementService.GetJobManifest'] as const
}

export function getXAmzTargetAWSIESnowballJobManagementServiceGetJobUnlockCodeKey() {
  return ['#X-Amz-Target=AWSIESnowballJobManagementService.GetJobUnlockCode'] as const
}

export function getXAmzTargetAWSIESnowballJobManagementServiceGetSnowballUsageKey() {
  return ['#X-Amz-Target=AWSIESnowballJobManagementService.GetSnowballUsage'] as const
}

export function getXAmzTargetAWSIESnowballJobManagementServiceGetSoftwareUpdatesKey() {
  return ['#X-Amz-Target=AWSIESnowballJobManagementService.GetSoftwareUpdates'] as const
}

export function getXAmzTargetAWSIESnowballJobManagementServiceListClusterJobsKey() {
  return ['#X-Amz-Target=AWSIESnowballJobManagementService.ListClusterJobs'] as const
}

export function getXAmzTargetAWSIESnowballJobManagementServiceListClustersKey() {
  return ['#X-Amz-Target=AWSIESnowballJobManagementService.ListClusters'] as const
}

export function getXAmzTargetAWSIESnowballJobManagementServiceListCompatibleImagesKey() {
  return ['#X-Amz-Target=AWSIESnowballJobManagementService.ListCompatibleImages'] as const
}

export function getXAmzTargetAWSIESnowballJobManagementServiceListJobsKey() {
  return ['#X-Amz-Target=AWSIESnowballJobManagementService.ListJobs'] as const
}

export function getXAmzTargetAWSIESnowballJobManagementServiceListLongTermPricingKey() {
  return ['#X-Amz-Target=AWSIESnowballJobManagementService.ListLongTermPricing'] as const
}

export function getXAmzTargetAWSIESnowballJobManagementServiceListServiceVersionsKey() {
  return ['#X-Amz-Target=AWSIESnowballJobManagementService.ListServiceVersions'] as const
}

export function getXAmzTargetAWSIESnowballJobManagementServiceUpdateClusterKey() {
  return ['#X-Amz-Target=AWSIESnowballJobManagementService.UpdateCluster'] as const
}

export function getXAmzTargetAWSIESnowballJobManagementServiceUpdateJobKey() {
  return ['#X-Amz-Target=AWSIESnowballJobManagementService.UpdateJob'] as const
}

export function getXAmzTargetAWSIESnowballJobManagementServiceUpdateJobShipmentStateKey() {
  return ['#X-Amz-Target=AWSIESnowballJobManagementService.UpdateJobShipmentState'] as const
}

export function getXAmzTargetAWSIESnowballJobManagementServiceUpdateLongTermPricingKey() {
  return ['#X-Amz-Target=AWSIESnowballJobManagementService.UpdateLongTermPricing'] as const
}

export function getPostXAmzTargetAWSIESnowballJobManagementServiceCancelClusterMutationKey() {
  return [
    '#X-Amz-Target=AWSIESnowballJobManagementService.CancelCluster',
    '/#X-Amz-Target=AWSIESnowballJobManagementService.CancelCluster',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSIESnowballJobManagementServiceCancelClusterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.CancelCluster']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.CancelCluster']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSIESnowballJobManagementServiceCancelClusterMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.CancelCluster']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSIESnowballJobManagementService.CancelCluster'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAWSIESnowballJobManagementServiceCancelCluster<
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
                  (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.CancelCluster']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.CancelCluster']['$post']
        >,
        TOnMutateResult
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
      getPostXAmzTargetAWSIESnowballJobManagementServiceCancelClusterMutationOptions<
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

export function getPostXAmzTargetAWSIESnowballJobManagementServiceCancelJobMutationKey() {
  return [
    '#X-Amz-Target=AWSIESnowballJobManagementService.CancelJob',
    '/#X-Amz-Target=AWSIESnowballJobManagementService.CancelJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSIESnowballJobManagementServiceCancelJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.CancelJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.CancelJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSIESnowballJobManagementServiceCancelJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.CancelJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSIESnowballJobManagementService.CancelJob'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSIESnowballJobManagementServiceCancelJob<
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
                  (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.CancelJob']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.CancelJob']['$post']
        >,
        TOnMutateResult
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
      getPostXAmzTargetAWSIESnowballJobManagementServiceCancelJobMutationOptions<
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

export function getPostXAmzTargetAWSIESnowballJobManagementServiceCreateAddressMutationKey() {
  return [
    '#X-Amz-Target=AWSIESnowballJobManagementService.CreateAddress',
    '/#X-Amz-Target=AWSIESnowballJobManagementService.CreateAddress',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSIESnowballJobManagementServiceCreateAddressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.CreateAddress']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.CreateAddress']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSIESnowballJobManagementServiceCreateAddressMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.CreateAddress']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSIESnowballJobManagementService.CreateAddress'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAWSIESnowballJobManagementServiceCreateAddress<
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
                  (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.CreateAddress']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.CreateAddress']['$post']
        >,
        TOnMutateResult
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
      getPostXAmzTargetAWSIESnowballJobManagementServiceCreateAddressMutationOptions<
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

export function getPostXAmzTargetAWSIESnowballJobManagementServiceCreateClusterMutationKey() {
  return [
    '#X-Amz-Target=AWSIESnowballJobManagementService.CreateCluster',
    '/#X-Amz-Target=AWSIESnowballJobManagementService.CreateCluster',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSIESnowballJobManagementServiceCreateClusterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.CreateCluster']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.CreateCluster']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSIESnowballJobManagementServiceCreateClusterMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.CreateCluster']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSIESnowballJobManagementService.CreateCluster'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAWSIESnowballJobManagementServiceCreateCluster<
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
                  (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.CreateCluster']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.CreateCluster']['$post']
        >,
        TOnMutateResult
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
      getPostXAmzTargetAWSIESnowballJobManagementServiceCreateClusterMutationOptions<
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

export function getPostXAmzTargetAWSIESnowballJobManagementServiceCreateJobMutationKey() {
  return [
    '#X-Amz-Target=AWSIESnowballJobManagementService.CreateJob',
    '/#X-Amz-Target=AWSIESnowballJobManagementService.CreateJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSIESnowballJobManagementServiceCreateJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.CreateJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.CreateJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSIESnowballJobManagementServiceCreateJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.CreateJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSIESnowballJobManagementService.CreateJob'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSIESnowballJobManagementServiceCreateJob<
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
                  (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.CreateJob']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.CreateJob']['$post']
        >,
        TOnMutateResult
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
      getPostXAmzTargetAWSIESnowballJobManagementServiceCreateJobMutationOptions<
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

export function getPostXAmzTargetAWSIESnowballJobManagementServiceCreateLongTermPricingMutationKey() {
  return [
    '#X-Amz-Target=AWSIESnowballJobManagementService.CreateLongTermPricing',
    '/#X-Amz-Target=AWSIESnowballJobManagementService.CreateLongTermPricing',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSIESnowballJobManagementServiceCreateLongTermPricingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.CreateLongTermPricing']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.CreateLongTermPricing']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSIESnowballJobManagementServiceCreateLongTermPricingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.CreateLongTermPricing']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSIESnowballJobManagementService.CreateLongTermPricing'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAWSIESnowballJobManagementServiceCreateLongTermPricing<
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
                  (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.CreateLongTermPricing']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.CreateLongTermPricing']['$post']
        >,
        TOnMutateResult
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
      getPostXAmzTargetAWSIESnowballJobManagementServiceCreateLongTermPricingMutationOptions<
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

export function getPostXAmzTargetAWSIESnowballJobManagementServiceCreateReturnShippingLabelMutationKey() {
  return [
    '#X-Amz-Target=AWSIESnowballJobManagementService.CreateReturnShippingLabel',
    '/#X-Amz-Target=AWSIESnowballJobManagementService.CreateReturnShippingLabel',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSIESnowballJobManagementServiceCreateReturnShippingLabelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.CreateReturnShippingLabel']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.CreateReturnShippingLabel']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSIESnowballJobManagementServiceCreateReturnShippingLabelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.CreateReturnShippingLabel']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSIESnowballJobManagementService.CreateReturnShippingLabel'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAWSIESnowballJobManagementServiceCreateReturnShippingLabel<
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
                  (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.CreateReturnShippingLabel']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.CreateReturnShippingLabel']['$post']
        >,
        TOnMutateResult
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
      getPostXAmzTargetAWSIESnowballJobManagementServiceCreateReturnShippingLabelMutationOptions<
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

export function getPostXAmzTargetAWSIESnowballJobManagementServiceDescribeAddressMutationKey() {
  return [
    '#X-Amz-Target=AWSIESnowballJobManagementService.DescribeAddress',
    '/#X-Amz-Target=AWSIESnowballJobManagementService.DescribeAddress',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSIESnowballJobManagementServiceDescribeAddressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.DescribeAddress']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.DescribeAddress']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSIESnowballJobManagementServiceDescribeAddressMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.DescribeAddress']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSIESnowballJobManagementService.DescribeAddress'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAWSIESnowballJobManagementServiceDescribeAddress<
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
                  (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.DescribeAddress']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.DescribeAddress']['$post']
        >,
        TOnMutateResult
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
      getPostXAmzTargetAWSIESnowballJobManagementServiceDescribeAddressMutationOptions<
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

export function getPostXAmzTargetAWSIESnowballJobManagementServiceDescribeAddressesMutationKey() {
  return [
    '#X-Amz-Target=AWSIESnowballJobManagementService.DescribeAddresses',
    '/#X-Amz-Target=AWSIESnowballJobManagementService.DescribeAddresses',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSIESnowballJobManagementServiceDescribeAddressesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.DescribeAddresses']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.DescribeAddresses']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSIESnowballJobManagementServiceDescribeAddressesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.DescribeAddresses']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSIESnowballJobManagementService.DescribeAddresses'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAWSIESnowballJobManagementServiceDescribeAddresses<
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
                  (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.DescribeAddresses']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.DescribeAddresses']['$post']
        >,
        TOnMutateResult
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
      getPostXAmzTargetAWSIESnowballJobManagementServiceDescribeAddressesMutationOptions<
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

export function getPostXAmzTargetAWSIESnowballJobManagementServiceDescribeClusterMutationKey() {
  return [
    '#X-Amz-Target=AWSIESnowballJobManagementService.DescribeCluster',
    '/#X-Amz-Target=AWSIESnowballJobManagementService.DescribeCluster',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSIESnowballJobManagementServiceDescribeClusterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.DescribeCluster']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.DescribeCluster']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSIESnowballJobManagementServiceDescribeClusterMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.DescribeCluster']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSIESnowballJobManagementService.DescribeCluster'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAWSIESnowballJobManagementServiceDescribeCluster<
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
                  (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.DescribeCluster']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.DescribeCluster']['$post']
        >,
        TOnMutateResult
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
      getPostXAmzTargetAWSIESnowballJobManagementServiceDescribeClusterMutationOptions<
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

export function getPostXAmzTargetAWSIESnowballJobManagementServiceDescribeJobMutationKey() {
  return [
    '#X-Amz-Target=AWSIESnowballJobManagementService.DescribeJob',
    '/#X-Amz-Target=AWSIESnowballJobManagementService.DescribeJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSIESnowballJobManagementServiceDescribeJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.DescribeJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.DescribeJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSIESnowballJobManagementServiceDescribeJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.DescribeJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSIESnowballJobManagementService.DescribeJob'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSIESnowballJobManagementServiceDescribeJob<
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
                  (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.DescribeJob']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.DescribeJob']['$post']
        >,
        TOnMutateResult
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
      getPostXAmzTargetAWSIESnowballJobManagementServiceDescribeJobMutationOptions<
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

export function getPostXAmzTargetAWSIESnowballJobManagementServiceDescribeReturnShippingLabelMutationKey() {
  return [
    '#X-Amz-Target=AWSIESnowballJobManagementService.DescribeReturnShippingLabel',
    '/#X-Amz-Target=AWSIESnowballJobManagementService.DescribeReturnShippingLabel',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSIESnowballJobManagementServiceDescribeReturnShippingLabelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.DescribeReturnShippingLabel']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.DescribeReturnShippingLabel']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSIESnowballJobManagementServiceDescribeReturnShippingLabelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.DescribeReturnShippingLabel']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSIESnowballJobManagementService.DescribeReturnShippingLabel'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAWSIESnowballJobManagementServiceDescribeReturnShippingLabel<
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
                  (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.DescribeReturnShippingLabel']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.DescribeReturnShippingLabel']['$post']
        >,
        TOnMutateResult
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
      getPostXAmzTargetAWSIESnowballJobManagementServiceDescribeReturnShippingLabelMutationOptions<
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

export function getPostXAmzTargetAWSIESnowballJobManagementServiceGetJobManifestMutationKey() {
  return [
    '#X-Amz-Target=AWSIESnowballJobManagementService.GetJobManifest',
    '/#X-Amz-Target=AWSIESnowballJobManagementService.GetJobManifest',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSIESnowballJobManagementServiceGetJobManifestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.GetJobManifest']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.GetJobManifest']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSIESnowballJobManagementServiceGetJobManifestMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.GetJobManifest']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSIESnowballJobManagementService.GetJobManifest'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAWSIESnowballJobManagementServiceGetJobManifest<
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
                  (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.GetJobManifest']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.GetJobManifest']['$post']
        >,
        TOnMutateResult
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
      getPostXAmzTargetAWSIESnowballJobManagementServiceGetJobManifestMutationOptions<
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

export function getPostXAmzTargetAWSIESnowballJobManagementServiceGetJobUnlockCodeMutationKey() {
  return [
    '#X-Amz-Target=AWSIESnowballJobManagementService.GetJobUnlockCode',
    '/#X-Amz-Target=AWSIESnowballJobManagementService.GetJobUnlockCode',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSIESnowballJobManagementServiceGetJobUnlockCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.GetJobUnlockCode']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.GetJobUnlockCode']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSIESnowballJobManagementServiceGetJobUnlockCodeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.GetJobUnlockCode']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSIESnowballJobManagementService.GetJobUnlockCode'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAWSIESnowballJobManagementServiceGetJobUnlockCode<
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
                  (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.GetJobUnlockCode']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.GetJobUnlockCode']['$post']
        >,
        TOnMutateResult
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
      getPostXAmzTargetAWSIESnowballJobManagementServiceGetJobUnlockCodeMutationOptions<
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

export function getPostXAmzTargetAWSIESnowballJobManagementServiceGetSnowballUsageMutationKey() {
  return [
    '#X-Amz-Target=AWSIESnowballJobManagementService.GetSnowballUsage',
    '/#X-Amz-Target=AWSIESnowballJobManagementService.GetSnowballUsage',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSIESnowballJobManagementServiceGetSnowballUsageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.GetSnowballUsage']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.GetSnowballUsage']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSIESnowballJobManagementServiceGetSnowballUsageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.GetSnowballUsage']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSIESnowballJobManagementService.GetSnowballUsage'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAWSIESnowballJobManagementServiceGetSnowballUsage<
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
                  (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.GetSnowballUsage']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.GetSnowballUsage']['$post']
        >,
        TOnMutateResult
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
      getPostXAmzTargetAWSIESnowballJobManagementServiceGetSnowballUsageMutationOptions<
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

export function getPostXAmzTargetAWSIESnowballJobManagementServiceGetSoftwareUpdatesMutationKey() {
  return [
    '#X-Amz-Target=AWSIESnowballJobManagementService.GetSoftwareUpdates',
    '/#X-Amz-Target=AWSIESnowballJobManagementService.GetSoftwareUpdates',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSIESnowballJobManagementServiceGetSoftwareUpdatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.GetSoftwareUpdates']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.GetSoftwareUpdates']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSIESnowballJobManagementServiceGetSoftwareUpdatesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.GetSoftwareUpdates']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSIESnowballJobManagementService.GetSoftwareUpdates'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAWSIESnowballJobManagementServiceGetSoftwareUpdates<
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
                  (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.GetSoftwareUpdates']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.GetSoftwareUpdates']['$post']
        >,
        TOnMutateResult
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
      getPostXAmzTargetAWSIESnowballJobManagementServiceGetSoftwareUpdatesMutationOptions<
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

export function getPostXAmzTargetAWSIESnowballJobManagementServiceListClusterJobsMutationKey() {
  return [
    '#X-Amz-Target=AWSIESnowballJobManagementService.ListClusterJobs',
    '/#X-Amz-Target=AWSIESnowballJobManagementService.ListClusterJobs',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSIESnowballJobManagementServiceListClusterJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.ListClusterJobs']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.ListClusterJobs']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSIESnowballJobManagementServiceListClusterJobsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.ListClusterJobs']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSIESnowballJobManagementService.ListClusterJobs'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAWSIESnowballJobManagementServiceListClusterJobs<
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
                  (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.ListClusterJobs']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.ListClusterJobs']['$post']
        >,
        TOnMutateResult
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
      getPostXAmzTargetAWSIESnowballJobManagementServiceListClusterJobsMutationOptions<
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

export function getPostXAmzTargetAWSIESnowballJobManagementServiceListClustersMutationKey() {
  return [
    '#X-Amz-Target=AWSIESnowballJobManagementService.ListClusters',
    '/#X-Amz-Target=AWSIESnowballJobManagementService.ListClusters',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSIESnowballJobManagementServiceListClustersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.ListClusters']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.ListClusters']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSIESnowballJobManagementServiceListClustersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.ListClusters']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSIESnowballJobManagementService.ListClusters'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSIESnowballJobManagementServiceListClusters<
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
                  (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.ListClusters']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.ListClusters']['$post']
        >,
        TOnMutateResult
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
      getPostXAmzTargetAWSIESnowballJobManagementServiceListClustersMutationOptions<
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

export function getPostXAmzTargetAWSIESnowballJobManagementServiceListCompatibleImagesMutationKey() {
  return [
    '#X-Amz-Target=AWSIESnowballJobManagementService.ListCompatibleImages',
    '/#X-Amz-Target=AWSIESnowballJobManagementService.ListCompatibleImages',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSIESnowballJobManagementServiceListCompatibleImagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.ListCompatibleImages']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.ListCompatibleImages']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSIESnowballJobManagementServiceListCompatibleImagesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.ListCompatibleImages']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSIESnowballJobManagementService.ListCompatibleImages'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAWSIESnowballJobManagementServiceListCompatibleImages<
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
                  (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.ListCompatibleImages']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.ListCompatibleImages']['$post']
        >,
        TOnMutateResult
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
      getPostXAmzTargetAWSIESnowballJobManagementServiceListCompatibleImagesMutationOptions<
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

export function getPostXAmzTargetAWSIESnowballJobManagementServiceListJobsMutationKey() {
  return [
    '#X-Amz-Target=AWSIESnowballJobManagementService.ListJobs',
    '/#X-Amz-Target=AWSIESnowballJobManagementService.ListJobs',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSIESnowballJobManagementServiceListJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.ListJobs']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.ListJobs']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSIESnowballJobManagementServiceListJobsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.ListJobs']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSIESnowballJobManagementService.ListJobs'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSIESnowballJobManagementServiceListJobs<
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
                  (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.ListJobs']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.ListJobs']['$post']
        >,
        TOnMutateResult
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
      getPostXAmzTargetAWSIESnowballJobManagementServiceListJobsMutationOptions<
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

export function getPostXAmzTargetAWSIESnowballJobManagementServiceListLongTermPricingMutationKey() {
  return [
    '#X-Amz-Target=AWSIESnowballJobManagementService.ListLongTermPricing',
    '/#X-Amz-Target=AWSIESnowballJobManagementService.ListLongTermPricing',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSIESnowballJobManagementServiceListLongTermPricingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.ListLongTermPricing']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.ListLongTermPricing']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSIESnowballJobManagementServiceListLongTermPricingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.ListLongTermPricing']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSIESnowballJobManagementService.ListLongTermPricing'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAWSIESnowballJobManagementServiceListLongTermPricing<
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
                  (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.ListLongTermPricing']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.ListLongTermPricing']['$post']
        >,
        TOnMutateResult
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
      getPostXAmzTargetAWSIESnowballJobManagementServiceListLongTermPricingMutationOptions<
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

export function getPostXAmzTargetAWSIESnowballJobManagementServiceListServiceVersionsMutationKey() {
  return [
    '#X-Amz-Target=AWSIESnowballJobManagementService.ListServiceVersions',
    '/#X-Amz-Target=AWSIESnowballJobManagementService.ListServiceVersions',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSIESnowballJobManagementServiceListServiceVersionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.ListServiceVersions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.ListServiceVersions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSIESnowballJobManagementServiceListServiceVersionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.ListServiceVersions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSIESnowballJobManagementService.ListServiceVersions'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAWSIESnowballJobManagementServiceListServiceVersions<
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
                  (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.ListServiceVersions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.ListServiceVersions']['$post']
        >,
        TOnMutateResult
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
      getPostXAmzTargetAWSIESnowballJobManagementServiceListServiceVersionsMutationOptions<
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

export function getPostXAmzTargetAWSIESnowballJobManagementServiceUpdateClusterMutationKey() {
  return [
    '#X-Amz-Target=AWSIESnowballJobManagementService.UpdateCluster',
    '/#X-Amz-Target=AWSIESnowballJobManagementService.UpdateCluster',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSIESnowballJobManagementServiceUpdateClusterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.UpdateCluster']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.UpdateCluster']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSIESnowballJobManagementServiceUpdateClusterMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.UpdateCluster']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSIESnowballJobManagementService.UpdateCluster'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAWSIESnowballJobManagementServiceUpdateCluster<
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
                  (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.UpdateCluster']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.UpdateCluster']['$post']
        >,
        TOnMutateResult
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
      getPostXAmzTargetAWSIESnowballJobManagementServiceUpdateClusterMutationOptions<
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

export function getPostXAmzTargetAWSIESnowballJobManagementServiceUpdateJobMutationKey() {
  return [
    '#X-Amz-Target=AWSIESnowballJobManagementService.UpdateJob',
    '/#X-Amz-Target=AWSIESnowballJobManagementService.UpdateJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSIESnowballJobManagementServiceUpdateJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.UpdateJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.UpdateJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSIESnowballJobManagementServiceUpdateJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.UpdateJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSIESnowballJobManagementService.UpdateJob'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSIESnowballJobManagementServiceUpdateJob<
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
                  (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.UpdateJob']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.UpdateJob']['$post']
        >,
        TOnMutateResult
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
      getPostXAmzTargetAWSIESnowballJobManagementServiceUpdateJobMutationOptions<
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

export function getPostXAmzTargetAWSIESnowballJobManagementServiceUpdateJobShipmentStateMutationKey() {
  return [
    '#X-Amz-Target=AWSIESnowballJobManagementService.UpdateJobShipmentState',
    '/#X-Amz-Target=AWSIESnowballJobManagementService.UpdateJobShipmentState',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSIESnowballJobManagementServiceUpdateJobShipmentStateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.UpdateJobShipmentState']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.UpdateJobShipmentState']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSIESnowballJobManagementServiceUpdateJobShipmentStateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.UpdateJobShipmentState']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSIESnowballJobManagementService.UpdateJobShipmentState'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAWSIESnowballJobManagementServiceUpdateJobShipmentState<
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
                  (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.UpdateJobShipmentState']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.UpdateJobShipmentState']['$post']
        >,
        TOnMutateResult
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
      getPostXAmzTargetAWSIESnowballJobManagementServiceUpdateJobShipmentStateMutationOptions<
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

export function getPostXAmzTargetAWSIESnowballJobManagementServiceUpdateLongTermPricingMutationKey() {
  return [
    '#X-Amz-Target=AWSIESnowballJobManagementService.UpdateLongTermPricing',
    '/#X-Amz-Target=AWSIESnowballJobManagementService.UpdateLongTermPricing',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSIESnowballJobManagementServiceUpdateLongTermPricingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.UpdateLongTermPricing']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.UpdateLongTermPricing']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSIESnowballJobManagementServiceUpdateLongTermPricingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.UpdateLongTermPricing']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSIESnowballJobManagementService.UpdateLongTermPricing'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAWSIESnowballJobManagementServiceUpdateLongTermPricing<
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
                  (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.UpdateLongTermPricing']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.UpdateLongTermPricing']['$post']
        >,
        TOnMutateResult
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
      getPostXAmzTargetAWSIESnowballJobManagementServiceUpdateLongTermPricingMutationOptions<
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
