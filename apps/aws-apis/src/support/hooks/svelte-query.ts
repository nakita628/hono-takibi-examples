import { createMutation, mutationOptions } from '@tanstack/svelte-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetAWSSupport_20130415AddAttachmentsToSetKey() {
  return ['#X-Amz-Target=AWSSupport_20130415.AddAttachmentsToSet'] as const
}

export function getXAmzTargetAWSSupport_20130415AddCommunicationToCaseKey() {
  return ['#X-Amz-Target=AWSSupport_20130415.AddCommunicationToCase'] as const
}

export function getXAmzTargetAWSSupport_20130415CreateCaseKey() {
  return ['#X-Amz-Target=AWSSupport_20130415.CreateCase'] as const
}

export function getXAmzTargetAWSSupport_20130415DescribeAttachmentKey() {
  return ['#X-Amz-Target=AWSSupport_20130415.DescribeAttachment'] as const
}

export function getXAmzTargetAWSSupport_20130415DescribeCasesKey() {
  return ['#X-Amz-Target=AWSSupport_20130415.DescribeCases'] as const
}

export function getXAmzTargetAWSSupport_20130415DescribeCommunicationsKey() {
  return ['#X-Amz-Target=AWSSupport_20130415.DescribeCommunications'] as const
}

export function getXAmzTargetAWSSupport_20130415DescribeServicesKey() {
  return ['#X-Amz-Target=AWSSupport_20130415.DescribeServices'] as const
}

export function getXAmzTargetAWSSupport_20130415DescribeSeverityLevelsKey() {
  return ['#X-Amz-Target=AWSSupport_20130415.DescribeSeverityLevels'] as const
}

export function getXAmzTargetAWSSupport_20130415DescribeTrustedAdvisorCheckRefreshStatusesKey() {
  return ['#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckRefreshStatuses'] as const
}

export function getXAmzTargetAWSSupport_20130415DescribeTrustedAdvisorCheckResultKey() {
  return ['#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckResult'] as const
}

export function getXAmzTargetAWSSupport_20130415DescribeTrustedAdvisorCheckSummariesKey() {
  return ['#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckSummaries'] as const
}

export function getXAmzTargetAWSSupport_20130415DescribeTrustedAdvisorChecksKey() {
  return ['#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorChecks'] as const
}

export function getXAmzTargetAWSSupport_20130415RefreshTrustedAdvisorCheckKey() {
  return ['#X-Amz-Target=AWSSupport_20130415.RefreshTrustedAdvisorCheck'] as const
}

export function getXAmzTargetAWSSupport_20130415ResolveCaseKey() {
  return ['#X-Amz-Target=AWSSupport_20130415.ResolveCase'] as const
}

export function getPostXAmzTargetAWSSupport20130415AddAttachmentsToSetMutationKey() {
  return [
    '#X-Amz-Target=AWSSupport_20130415.AddAttachmentsToSet',
    '/#X-Amz-Target=AWSSupport_20130415.AddAttachmentsToSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSSupport20130415AddAttachmentsToSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSSupport_20130415.AddAttachmentsToSet']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSupport_20130415.AddAttachmentsToSet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSSupport20130415AddAttachmentsToSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSSupport_20130415.AddAttachmentsToSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSSupport_20130415.AddAttachmentsToSet'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSSupport20130415AddAttachmentsToSet<
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
                  (typeof client)['#X-Amz-Target=AWSSupport_20130415.AddAttachmentsToSet']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSSupport_20130415.AddAttachmentsToSet']['$post']
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
    const mutationDefaults = getPostXAmzTargetAWSSupport20130415AddAttachmentsToSetMutationOptions<
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

export function getPostXAmzTargetAWSSupport20130415AddCommunicationToCaseMutationKey() {
  return [
    '#X-Amz-Target=AWSSupport_20130415.AddCommunicationToCase',
    '/#X-Amz-Target=AWSSupport_20130415.AddCommunicationToCase',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSSupport20130415AddCommunicationToCaseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSSupport_20130415.AddCommunicationToCase']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSupport_20130415.AddCommunicationToCase']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSSupport20130415AddCommunicationToCaseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSSupport_20130415.AddCommunicationToCase']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSSupport_20130415.AddCommunicationToCase'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSSupport20130415AddCommunicationToCase<
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
                  (typeof client)['#X-Amz-Target=AWSSupport_20130415.AddCommunicationToCase']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSSupport_20130415.AddCommunicationToCase']['$post']
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
      getPostXAmzTargetAWSSupport20130415AddCommunicationToCaseMutationOptions<
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

export function getPostXAmzTargetAWSSupport20130415CreateCaseMutationKey() {
  return [
    '#X-Amz-Target=AWSSupport_20130415.CreateCase',
    '/#X-Amz-Target=AWSSupport_20130415.CreateCase',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSSupport20130415CreateCaseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSSupport_20130415.CreateCase']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSSupport_20130415.CreateCase']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSSupport20130415CreateCaseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSSupport_20130415.CreateCase']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSSupport_20130415.CreateCase'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSSupport20130415CreateCase<
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
                ReturnType<(typeof client)['#X-Amz-Target=AWSSupport_20130415.CreateCase']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSSupport_20130415.CreateCase']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetAWSSupport20130415CreateCaseMutationOptions<
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

export function getPostXAmzTargetAWSSupport20130415DescribeAttachmentMutationKey() {
  return [
    '#X-Amz-Target=AWSSupport_20130415.DescribeAttachment',
    '/#X-Amz-Target=AWSSupport_20130415.DescribeAttachment',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSSupport20130415DescribeAttachmentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeAttachment']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeAttachment']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSSupport20130415DescribeAttachmentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeAttachment']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSSupport_20130415.DescribeAttachment'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSSupport20130415DescribeAttachment<
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
                  (typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeAttachment']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeAttachment']['$post']
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
    const mutationDefaults = getPostXAmzTargetAWSSupport20130415DescribeAttachmentMutationOptions<
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

export function getPostXAmzTargetAWSSupport20130415DescribeCasesMutationKey() {
  return [
    '#X-Amz-Target=AWSSupport_20130415.DescribeCases',
    '/#X-Amz-Target=AWSSupport_20130415.DescribeCases',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSSupport20130415DescribeCasesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeCases']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeCases']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSSupport20130415DescribeCasesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeCases']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSSupport_20130415.DescribeCases'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSSupport20130415DescribeCases<
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
                  (typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeCases']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeCases']['$post']
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
    const mutationDefaults = getPostXAmzTargetAWSSupport20130415DescribeCasesMutationOptions<
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

export function getPostXAmzTargetAWSSupport20130415DescribeCommunicationsMutationKey() {
  return [
    '#X-Amz-Target=AWSSupport_20130415.DescribeCommunications',
    '/#X-Amz-Target=AWSSupport_20130415.DescribeCommunications',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSSupport20130415DescribeCommunicationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeCommunications']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeCommunications']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSSupport20130415DescribeCommunicationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeCommunications']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSSupport_20130415.DescribeCommunications'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSSupport20130415DescribeCommunications<
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
                  (typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeCommunications']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeCommunications']['$post']
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
      getPostXAmzTargetAWSSupport20130415DescribeCommunicationsMutationOptions<
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

export function getPostXAmzTargetAWSSupport20130415DescribeServicesMutationKey() {
  return [
    '#X-Amz-Target=AWSSupport_20130415.DescribeServices',
    '/#X-Amz-Target=AWSSupport_20130415.DescribeServices',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSSupport20130415DescribeServicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeServices']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeServices']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSSupport20130415DescribeServicesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeServices']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSSupport_20130415.DescribeServices'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSSupport20130415DescribeServices<
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
                  (typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeServices']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeServices']['$post']
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
    const mutationDefaults = getPostXAmzTargetAWSSupport20130415DescribeServicesMutationOptions<
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

export function getPostXAmzTargetAWSSupport20130415DescribeSeverityLevelsMutationKey() {
  return [
    '#X-Amz-Target=AWSSupport_20130415.DescribeSeverityLevels',
    '/#X-Amz-Target=AWSSupport_20130415.DescribeSeverityLevels',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSSupport20130415DescribeSeverityLevelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeSeverityLevels']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeSeverityLevels']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSSupport20130415DescribeSeverityLevelsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeSeverityLevels']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSSupport_20130415.DescribeSeverityLevels'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSSupport20130415DescribeSeverityLevels<
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
                  (typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeSeverityLevels']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeSeverityLevels']['$post']
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
      getPostXAmzTargetAWSSupport20130415DescribeSeverityLevelsMutationOptions<
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

export function getPostXAmzTargetAWSSupport20130415DescribeTrustedAdvisorCheckRefreshStatusesMutationKey() {
  return [
    '#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckRefreshStatuses',
    '/#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckRefreshStatuses',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSSupport20130415DescribeTrustedAdvisorCheckRefreshStatusesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckRefreshStatuses']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckRefreshStatuses']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSSupport20130415DescribeTrustedAdvisorCheckRefreshStatusesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckRefreshStatuses']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckRefreshStatuses'
        ].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSSupport20130415DescribeTrustedAdvisorCheckRefreshStatuses<
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
                  (typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckRefreshStatuses']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckRefreshStatuses']['$post']
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
      getPostXAmzTargetAWSSupport20130415DescribeTrustedAdvisorCheckRefreshStatusesMutationOptions<
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

export function getPostXAmzTargetAWSSupport20130415DescribeTrustedAdvisorCheckResultMutationKey() {
  return [
    '#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckResult',
    '/#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckResult',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSSupport20130415DescribeTrustedAdvisorCheckResultMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckResult']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckResult']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSSupport20130415DescribeTrustedAdvisorCheckResultMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckResult']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckResult'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAWSSupport20130415DescribeTrustedAdvisorCheckResult<
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
                  (typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckResult']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckResult']['$post']
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
      getPostXAmzTargetAWSSupport20130415DescribeTrustedAdvisorCheckResultMutationOptions<
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

export function getPostXAmzTargetAWSSupport20130415DescribeTrustedAdvisorCheckSummariesMutationKey() {
  return [
    '#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckSummaries',
    '/#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckSummaries',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSSupport20130415DescribeTrustedAdvisorCheckSummariesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckSummaries']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckSummaries']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSSupport20130415DescribeTrustedAdvisorCheckSummariesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckSummaries']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckSummaries'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAWSSupport20130415DescribeTrustedAdvisorCheckSummaries<
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
                  (typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckSummaries']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckSummaries']['$post']
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
      getPostXAmzTargetAWSSupport20130415DescribeTrustedAdvisorCheckSummariesMutationOptions<
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

export function getPostXAmzTargetAWSSupport20130415DescribeTrustedAdvisorChecksMutationKey() {
  return [
    '#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorChecks',
    '/#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorChecks',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSSupport20130415DescribeTrustedAdvisorChecksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorChecks']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorChecks']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSSupport20130415DescribeTrustedAdvisorChecksMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorChecks']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorChecks'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAWSSupport20130415DescribeTrustedAdvisorChecks<
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
                  (typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorChecks']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorChecks']['$post']
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
      getPostXAmzTargetAWSSupport20130415DescribeTrustedAdvisorChecksMutationOptions<
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

export function getPostXAmzTargetAWSSupport20130415RefreshTrustedAdvisorCheckMutationKey() {
  return [
    '#X-Amz-Target=AWSSupport_20130415.RefreshTrustedAdvisorCheck',
    '/#X-Amz-Target=AWSSupport_20130415.RefreshTrustedAdvisorCheck',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSSupport20130415RefreshTrustedAdvisorCheckMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSSupport_20130415.RefreshTrustedAdvisorCheck']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSupport_20130415.RefreshTrustedAdvisorCheck']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSSupport20130415RefreshTrustedAdvisorCheckMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSSupport_20130415.RefreshTrustedAdvisorCheck']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSSupport_20130415.RefreshTrustedAdvisorCheck'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSSupport20130415RefreshTrustedAdvisorCheck<
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
                  (typeof client)['#X-Amz-Target=AWSSupport_20130415.RefreshTrustedAdvisorCheck']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSSupport_20130415.RefreshTrustedAdvisorCheck']['$post']
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
      getPostXAmzTargetAWSSupport20130415RefreshTrustedAdvisorCheckMutationOptions<
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

export function getPostXAmzTargetAWSSupport20130415ResolveCaseMutationKey() {
  return [
    '#X-Amz-Target=AWSSupport_20130415.ResolveCase',
    '/#X-Amz-Target=AWSSupport_20130415.ResolveCase',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSSupport20130415ResolveCaseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSSupport_20130415.ResolveCase']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSSupport_20130415.ResolveCase']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSSupport20130415ResolveCaseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSSupport_20130415.ResolveCase']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSSupport_20130415.ResolveCase'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSSupport20130415ResolveCase<
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
                  (typeof client)['#X-Amz-Target=AWSSupport_20130415.ResolveCase']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSSupport_20130415.ResolveCase']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetAWSSupport20130415ResolveCaseMutationOptions<
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
