import { createMutation, mutationOptions } from '@tanstack/svelte-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetResourceGroupsTaggingAPI_20170126DescribeReportCreationKey() {
  return ['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.DescribeReportCreation'] as const
}

export function getXAmzTargetResourceGroupsTaggingAPI_20170126GetComplianceSummaryKey() {
  return ['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetComplianceSummary'] as const
}

export function getXAmzTargetResourceGroupsTaggingAPI_20170126GetResourcesKey() {
  return ['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetResources'] as const
}

export function getXAmzTargetResourceGroupsTaggingAPI_20170126GetTagKeysKey() {
  return ['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetTagKeys'] as const
}

export function getXAmzTargetResourceGroupsTaggingAPI_20170126GetTagValuesKey() {
  return ['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetTagValues'] as const
}

export function getXAmzTargetResourceGroupsTaggingAPI_20170126StartReportCreationKey() {
  return ['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.StartReportCreation'] as const
}

export function getXAmzTargetResourceGroupsTaggingAPI_20170126TagResourcesKey() {
  return ['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.TagResources'] as const
}

export function getXAmzTargetResourceGroupsTaggingAPI_20170126UntagResourcesKey() {
  return ['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.UntagResources'] as const
}

export function getPostXAmzTargetResourceGroupsTaggingAPI20170126DescribeReportCreationMutationKey() {
  return [
    '#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.DescribeReportCreation',
    '/#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.DescribeReportCreation',
    'POST',
  ] as const
}

export function getPostXAmzTargetResourceGroupsTaggingAPI20170126DescribeReportCreationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.DescribeReportCreation']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.DescribeReportCreation']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetResourceGroupsTaggingAPI20170126DescribeReportCreationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.DescribeReportCreation']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.DescribeReportCreation'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetResourceGroupsTaggingAPI20170126DescribeReportCreation<
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
                  (typeof client)['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.DescribeReportCreation']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.DescribeReportCreation']['$post']
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
      getPostXAmzTargetResourceGroupsTaggingAPI20170126DescribeReportCreationMutationOptions<
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

export function getPostXAmzTargetResourceGroupsTaggingAPI20170126GetComplianceSummaryMutationKey() {
  return [
    '#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetComplianceSummary',
    '/#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetComplianceSummary',
    'POST',
  ] as const
}

export function getPostXAmzTargetResourceGroupsTaggingAPI20170126GetComplianceSummaryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetComplianceSummary']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetComplianceSummary']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetResourceGroupsTaggingAPI20170126GetComplianceSummaryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetComplianceSummary']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetComplianceSummary'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetResourceGroupsTaggingAPI20170126GetComplianceSummary<
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
                  (typeof client)['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetComplianceSummary']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetComplianceSummary']['$post']
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
      getPostXAmzTargetResourceGroupsTaggingAPI20170126GetComplianceSummaryMutationOptions<
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

export function getPostXAmzTargetResourceGroupsTaggingAPI20170126GetResourcesMutationKey() {
  return [
    '#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetResources',
    '/#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetResources',
    'POST',
  ] as const
}

export function getPostXAmzTargetResourceGroupsTaggingAPI20170126GetResourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetResources']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetResources']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetResourceGroupsTaggingAPI20170126GetResourcesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetResources']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetResources'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetResourceGroupsTaggingAPI20170126GetResources<
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
                  (typeof client)['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetResources']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetResources']['$post']
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
      getPostXAmzTargetResourceGroupsTaggingAPI20170126GetResourcesMutationOptions<
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

export function getPostXAmzTargetResourceGroupsTaggingAPI20170126GetTagKeysMutationKey() {
  return [
    '#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetTagKeys',
    '/#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetTagKeys',
    'POST',
  ] as const
}

export function getPostXAmzTargetResourceGroupsTaggingAPI20170126GetTagKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetTagKeys']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetTagKeys']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetResourceGroupsTaggingAPI20170126GetTagKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetTagKeys']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetTagKeys'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetResourceGroupsTaggingAPI20170126GetTagKeys<
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
                  (typeof client)['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetTagKeys']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetTagKeys']['$post']
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
      getPostXAmzTargetResourceGroupsTaggingAPI20170126GetTagKeysMutationOptions<
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

export function getPostXAmzTargetResourceGroupsTaggingAPI20170126GetTagValuesMutationKey() {
  return [
    '#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetTagValues',
    '/#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetTagValues',
    'POST',
  ] as const
}

export function getPostXAmzTargetResourceGroupsTaggingAPI20170126GetTagValuesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetTagValues']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetTagValues']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetResourceGroupsTaggingAPI20170126GetTagValuesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetTagValues']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetTagValues'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetResourceGroupsTaggingAPI20170126GetTagValues<
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
                  (typeof client)['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetTagValues']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetTagValues']['$post']
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
      getPostXAmzTargetResourceGroupsTaggingAPI20170126GetTagValuesMutationOptions<
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

export function getPostXAmzTargetResourceGroupsTaggingAPI20170126StartReportCreationMutationKey() {
  return [
    '#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.StartReportCreation',
    '/#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.StartReportCreation',
    'POST',
  ] as const
}

export function getPostXAmzTargetResourceGroupsTaggingAPI20170126StartReportCreationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.StartReportCreation']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.StartReportCreation']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetResourceGroupsTaggingAPI20170126StartReportCreationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.StartReportCreation']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.StartReportCreation'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetResourceGroupsTaggingAPI20170126StartReportCreation<
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
                  (typeof client)['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.StartReportCreation']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.StartReportCreation']['$post']
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
      getPostXAmzTargetResourceGroupsTaggingAPI20170126StartReportCreationMutationOptions<
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

export function getPostXAmzTargetResourceGroupsTaggingAPI20170126TagResourcesMutationKey() {
  return [
    '#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.TagResources',
    '/#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.TagResources',
    'POST',
  ] as const
}

export function getPostXAmzTargetResourceGroupsTaggingAPI20170126TagResourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.TagResources']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.TagResources']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetResourceGroupsTaggingAPI20170126TagResourcesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.TagResources']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.TagResources'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetResourceGroupsTaggingAPI20170126TagResources<
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
                  (typeof client)['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.TagResources']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.TagResources']['$post']
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
      getPostXAmzTargetResourceGroupsTaggingAPI20170126TagResourcesMutationOptions<
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

export function getPostXAmzTargetResourceGroupsTaggingAPI20170126UntagResourcesMutationKey() {
  return [
    '#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.UntagResources',
    '/#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.UntagResources',
    'POST',
  ] as const
}

export function getPostXAmzTargetResourceGroupsTaggingAPI20170126UntagResourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.UntagResources']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.UntagResources']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetResourceGroupsTaggingAPI20170126UntagResourcesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.UntagResources']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.UntagResources'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetResourceGroupsTaggingAPI20170126UntagResources<
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
                  (typeof client)['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.UntagResources']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.UntagResources']['$post']
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
      getPostXAmzTargetResourceGroupsTaggingAPI20170126UntagResourcesMutationOptions<
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
