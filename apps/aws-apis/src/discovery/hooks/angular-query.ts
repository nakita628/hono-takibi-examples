import { injectMutation, mutationOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetAWSPoseidonServiceV2015_11_01AssociateConfigurationItemsToApplicationKey() {
  return [
    '#X-Amz-Target=AWSPoseidonService_V2015_11_01.AssociateConfigurationItemsToApplication',
  ] as const
}

export function getXAmzTargetAWSPoseidonServiceV2015_11_01BatchDeleteImportDataKey() {
  return ['#X-Amz-Target=AWSPoseidonService_V2015_11_01.BatchDeleteImportData'] as const
}

export function getXAmzTargetAWSPoseidonServiceV2015_11_01CreateApplicationKey() {
  return ['#X-Amz-Target=AWSPoseidonService_V2015_11_01.CreateApplication'] as const
}

export function getXAmzTargetAWSPoseidonServiceV2015_11_01CreateTagsKey() {
  return ['#X-Amz-Target=AWSPoseidonService_V2015_11_01.CreateTags'] as const
}

export function getXAmzTargetAWSPoseidonServiceV2015_11_01DeleteApplicationsKey() {
  return ['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DeleteApplications'] as const
}

export function getXAmzTargetAWSPoseidonServiceV2015_11_01DeleteTagsKey() {
  return ['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DeleteTags'] as const
}

export function getXAmzTargetAWSPoseidonServiceV2015_11_01DescribeAgentsKey() {
  return ['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeAgents'] as const
}

export function getXAmzTargetAWSPoseidonServiceV2015_11_01DescribeConfigurationsKey() {
  return ['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeConfigurations'] as const
}

export function getXAmzTargetAWSPoseidonServiceV2015_11_01DescribeContinuousExportsKey() {
  return ['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeContinuousExports'] as const
}

export function getXAmzTargetAWSPoseidonServiceV2015_11_01DescribeExportConfigurationsKey() {
  return ['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeExportConfigurations'] as const
}

export function getXAmzTargetAWSPoseidonServiceV2015_11_01DescribeExportTasksKey() {
  return ['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeExportTasks'] as const
}

export function getXAmzTargetAWSPoseidonServiceV2015_11_01DescribeImportTasksKey() {
  return ['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeImportTasks'] as const
}

export function getXAmzTargetAWSPoseidonServiceV2015_11_01DescribeTagsKey() {
  return ['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeTags'] as const
}

export function getXAmzTargetAWSPoseidonServiceV2015_11_01DisassociateConfigurationItemsFromApplicationKey() {
  return [
    '#X-Amz-Target=AWSPoseidonService_V2015_11_01.DisassociateConfigurationItemsFromApplication',
  ] as const
}

export function getXAmzTargetAWSPoseidonServiceV2015_11_01ExportConfigurationsKey() {
  return ['#X-Amz-Target=AWSPoseidonService_V2015_11_01.ExportConfigurations'] as const
}

export function getXAmzTargetAWSPoseidonServiceV2015_11_01GetDiscoverySummaryKey() {
  return ['#X-Amz-Target=AWSPoseidonService_V2015_11_01.GetDiscoverySummary'] as const
}

export function getXAmzTargetAWSPoseidonServiceV2015_11_01ListConfigurationsKey() {
  return ['#X-Amz-Target=AWSPoseidonService_V2015_11_01.ListConfigurations'] as const
}

export function getXAmzTargetAWSPoseidonServiceV2015_11_01ListServerNeighborsKey() {
  return ['#X-Amz-Target=AWSPoseidonService_V2015_11_01.ListServerNeighbors'] as const
}

export function getXAmzTargetAWSPoseidonServiceV2015_11_01StartContinuousExportKey() {
  return ['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartContinuousExport'] as const
}

export function getXAmzTargetAWSPoseidonServiceV2015_11_01StartDataCollectionByAgentIdsKey() {
  return ['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartDataCollectionByAgentIds'] as const
}

export function getXAmzTargetAWSPoseidonServiceV2015_11_01StartExportTaskKey() {
  return ['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartExportTask'] as const
}

export function getXAmzTargetAWSPoseidonServiceV2015_11_01StartImportTaskKey() {
  return ['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartImportTask'] as const
}

export function getXAmzTargetAWSPoseidonServiceV2015_11_01StopContinuousExportKey() {
  return ['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StopContinuousExport'] as const
}

export function getXAmzTargetAWSPoseidonServiceV2015_11_01StopDataCollectionByAgentIdsKey() {
  return ['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StopDataCollectionByAgentIds'] as const
}

export function getXAmzTargetAWSPoseidonServiceV2015_11_01UpdateApplicationKey() {
  return ['#X-Amz-Target=AWSPoseidonService_V2015_11_01.UpdateApplication'] as const
}

export function getPostXAmzTargetAWSPoseidonServiceV20151101AssociateConfigurationItemsToApplicationMutationKey() {
  return [
    '#X-Amz-Target=AWSPoseidonService_V2015_11_01.AssociateConfigurationItemsToApplication',
    '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.AssociateConfigurationItemsToApplication',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSPoseidonServiceV20151101AssociateConfigurationItemsToApplicationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.AssociateConfigurationItemsToApplication']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.AssociateConfigurationItemsToApplication']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSPoseidonServiceV20151101AssociateConfigurationItemsToApplicationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.AssociateConfigurationItemsToApplication']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=AWSPoseidonService_V2015_11_01.AssociateConfigurationItemsToApplication'
        ].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSPoseidonServiceV20151101AssociateConfigurationItemsToApplication<
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
                  (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.AssociateConfigurationItemsToApplication']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.AssociateConfigurationItemsToApplication']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSPoseidonServiceV20151101AssociateConfigurationItemsToApplicationMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSPoseidonServiceV20151101BatchDeleteImportDataMutationKey() {
  return [
    '#X-Amz-Target=AWSPoseidonService_V2015_11_01.BatchDeleteImportData',
    '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.BatchDeleteImportData',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSPoseidonServiceV20151101BatchDeleteImportDataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.BatchDeleteImportData']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.BatchDeleteImportData']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSPoseidonServiceV20151101BatchDeleteImportDataMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.BatchDeleteImportData']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSPoseidonService_V2015_11_01.BatchDeleteImportData'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetAWSPoseidonServiceV20151101BatchDeleteImportData<
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
                  (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.BatchDeleteImportData']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.BatchDeleteImportData']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSPoseidonServiceV20151101BatchDeleteImportDataMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSPoseidonServiceV20151101CreateApplicationMutationKey() {
  return [
    '#X-Amz-Target=AWSPoseidonService_V2015_11_01.CreateApplication',
    '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.CreateApplication',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSPoseidonServiceV20151101CreateApplicationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.CreateApplication']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.CreateApplication']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSPoseidonServiceV20151101CreateApplicationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.CreateApplication']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSPoseidonService_V2015_11_01.CreateApplication'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetAWSPoseidonServiceV20151101CreateApplication<
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
                  (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.CreateApplication']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.CreateApplication']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSPoseidonServiceV20151101CreateApplicationMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSPoseidonServiceV20151101CreateTagsMutationKey() {
  return [
    '#X-Amz-Target=AWSPoseidonService_V2015_11_01.CreateTags',
    '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.CreateTags',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSPoseidonServiceV20151101CreateTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.CreateTags']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.CreateTags']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSPoseidonServiceV20151101CreateTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.CreateTags']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSPoseidonService_V2015_11_01.CreateTags'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSPoseidonServiceV20151101CreateTags<
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
                  (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.CreateTags']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.CreateTags']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSPoseidonServiceV20151101CreateTagsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSPoseidonServiceV20151101DeleteApplicationsMutationKey() {
  return [
    '#X-Amz-Target=AWSPoseidonService_V2015_11_01.DeleteApplications',
    '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.DeleteApplications',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSPoseidonServiceV20151101DeleteApplicationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DeleteApplications']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DeleteApplications']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSPoseidonServiceV20151101DeleteApplicationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DeleteApplications']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DeleteApplications'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetAWSPoseidonServiceV20151101DeleteApplications<
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
                  (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DeleteApplications']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DeleteApplications']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSPoseidonServiceV20151101DeleteApplicationsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSPoseidonServiceV20151101DeleteTagsMutationKey() {
  return [
    '#X-Amz-Target=AWSPoseidonService_V2015_11_01.DeleteTags',
    '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.DeleteTags',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSPoseidonServiceV20151101DeleteTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DeleteTags']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DeleteTags']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSPoseidonServiceV20151101DeleteTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DeleteTags']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DeleteTags'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSPoseidonServiceV20151101DeleteTags<
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
                  (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DeleteTags']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DeleteTags']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSPoseidonServiceV20151101DeleteTagsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSPoseidonServiceV20151101DescribeAgentsMutationKey() {
  return [
    '#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeAgents',
    '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeAgents',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSPoseidonServiceV20151101DescribeAgentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeAgents']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeAgents']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSPoseidonServiceV20151101DescribeAgentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeAgents']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeAgents'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSPoseidonServiceV20151101DescribeAgents<
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
                  (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeAgents']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeAgents']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSPoseidonServiceV20151101DescribeAgentsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSPoseidonServiceV20151101DescribeConfigurationsMutationKey() {
  return [
    '#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeConfigurations',
    '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeConfigurations',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSPoseidonServiceV20151101DescribeConfigurationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeConfigurations']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeConfigurations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSPoseidonServiceV20151101DescribeConfigurationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeConfigurations']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeConfigurations'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetAWSPoseidonServiceV20151101DescribeConfigurations<
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
                  (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeConfigurations']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeConfigurations']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSPoseidonServiceV20151101DescribeConfigurationsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSPoseidonServiceV20151101DescribeContinuousExportsMutationKey() {
  return [
    '#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeContinuousExports',
    '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeContinuousExports',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSPoseidonServiceV20151101DescribeContinuousExportsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeContinuousExports']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeContinuousExports']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSPoseidonServiceV20151101DescribeContinuousExportsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeContinuousExports']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeContinuousExports'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetAWSPoseidonServiceV20151101DescribeContinuousExports<
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
                  (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeContinuousExports']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeContinuousExports']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSPoseidonServiceV20151101DescribeContinuousExportsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSPoseidonServiceV20151101DescribeExportConfigurationsMutationKey() {
  return [
    '#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeExportConfigurations',
    '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeExportConfigurations',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSPoseidonServiceV20151101DescribeExportConfigurationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeExportConfigurations']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeExportConfigurations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSPoseidonServiceV20151101DescribeExportConfigurationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeExportConfigurations']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeExportConfigurations'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetAWSPoseidonServiceV20151101DescribeExportConfigurations<
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
                  (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeExportConfigurations']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeExportConfigurations']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSPoseidonServiceV20151101DescribeExportConfigurationsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSPoseidonServiceV20151101DescribeExportTasksMutationKey() {
  return [
    '#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeExportTasks',
    '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeExportTasks',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSPoseidonServiceV20151101DescribeExportTasksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeExportTasks']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeExportTasks']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSPoseidonServiceV20151101DescribeExportTasksMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeExportTasks']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeExportTasks'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetAWSPoseidonServiceV20151101DescribeExportTasks<
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
                  (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeExportTasks']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeExportTasks']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSPoseidonServiceV20151101DescribeExportTasksMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSPoseidonServiceV20151101DescribeImportTasksMutationKey() {
  return [
    '#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeImportTasks',
    '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeImportTasks',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSPoseidonServiceV20151101DescribeImportTasksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeImportTasks']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeImportTasks']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSPoseidonServiceV20151101DescribeImportTasksMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeImportTasks']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeImportTasks'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetAWSPoseidonServiceV20151101DescribeImportTasks<
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
                  (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeImportTasks']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeImportTasks']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSPoseidonServiceV20151101DescribeImportTasksMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSPoseidonServiceV20151101DescribeTagsMutationKey() {
  return [
    '#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeTags',
    '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeTags',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSPoseidonServiceV20151101DescribeTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeTags']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeTags']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSPoseidonServiceV20151101DescribeTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeTags']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeTags'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSPoseidonServiceV20151101DescribeTags<
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
                  (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeTags']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeTags']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSPoseidonServiceV20151101DescribeTagsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSPoseidonServiceV20151101DisassociateConfigurationItemsFromApplicationMutationKey() {
  return [
    '#X-Amz-Target=AWSPoseidonService_V2015_11_01.DisassociateConfigurationItemsFromApplication',
    '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.DisassociateConfigurationItemsFromApplication',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSPoseidonServiceV20151101DisassociateConfigurationItemsFromApplicationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DisassociateConfigurationItemsFromApplication']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DisassociateConfigurationItemsFromApplication']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSPoseidonServiceV20151101DisassociateConfigurationItemsFromApplicationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DisassociateConfigurationItemsFromApplication']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=AWSPoseidonService_V2015_11_01.DisassociateConfigurationItemsFromApplication'
        ].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSPoseidonServiceV20151101DisassociateConfigurationItemsFromApplication<
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
                  (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DisassociateConfigurationItemsFromApplication']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DisassociateConfigurationItemsFromApplication']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSPoseidonServiceV20151101DisassociateConfigurationItemsFromApplicationMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSPoseidonServiceV20151101ExportConfigurationsMutationKey() {
  return [
    '#X-Amz-Target=AWSPoseidonService_V2015_11_01.ExportConfigurations',
    '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.ExportConfigurations',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSPoseidonServiceV20151101ExportConfigurationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.ExportConfigurations']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.ExportConfigurations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSPoseidonServiceV20151101ExportConfigurationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.ExportConfigurations']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSPoseidonService_V2015_11_01.ExportConfigurations'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetAWSPoseidonServiceV20151101ExportConfigurations<
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
                  (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.ExportConfigurations']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.ExportConfigurations']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSPoseidonServiceV20151101ExportConfigurationsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSPoseidonServiceV20151101GetDiscoverySummaryMutationKey() {
  return [
    '#X-Amz-Target=AWSPoseidonService_V2015_11_01.GetDiscoverySummary',
    '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.GetDiscoverySummary',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSPoseidonServiceV20151101GetDiscoverySummaryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.GetDiscoverySummary']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.GetDiscoverySummary']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSPoseidonServiceV20151101GetDiscoverySummaryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.GetDiscoverySummary']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSPoseidonService_V2015_11_01.GetDiscoverySummary'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetAWSPoseidonServiceV20151101GetDiscoverySummary<
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
                  (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.GetDiscoverySummary']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.GetDiscoverySummary']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSPoseidonServiceV20151101GetDiscoverySummaryMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSPoseidonServiceV20151101ListConfigurationsMutationKey() {
  return [
    '#X-Amz-Target=AWSPoseidonService_V2015_11_01.ListConfigurations',
    '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.ListConfigurations',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSPoseidonServiceV20151101ListConfigurationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.ListConfigurations']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.ListConfigurations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSPoseidonServiceV20151101ListConfigurationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.ListConfigurations']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSPoseidonService_V2015_11_01.ListConfigurations'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetAWSPoseidonServiceV20151101ListConfigurations<
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
                  (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.ListConfigurations']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.ListConfigurations']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSPoseidonServiceV20151101ListConfigurationsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSPoseidonServiceV20151101ListServerNeighborsMutationKey() {
  return [
    '#X-Amz-Target=AWSPoseidonService_V2015_11_01.ListServerNeighbors',
    '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.ListServerNeighbors',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSPoseidonServiceV20151101ListServerNeighborsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.ListServerNeighbors']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.ListServerNeighbors']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSPoseidonServiceV20151101ListServerNeighborsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.ListServerNeighbors']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSPoseidonService_V2015_11_01.ListServerNeighbors'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetAWSPoseidonServiceV20151101ListServerNeighbors<
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
                  (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.ListServerNeighbors']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.ListServerNeighbors']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSPoseidonServiceV20151101ListServerNeighborsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSPoseidonServiceV20151101StartContinuousExportMutationKey() {
  return [
    '#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartContinuousExport',
    '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartContinuousExport',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSPoseidonServiceV20151101StartContinuousExportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartContinuousExport']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartContinuousExport']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSPoseidonServiceV20151101StartContinuousExportMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartContinuousExport']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartContinuousExport'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetAWSPoseidonServiceV20151101StartContinuousExport<
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
                  (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartContinuousExport']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartContinuousExport']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSPoseidonServiceV20151101StartContinuousExportMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSPoseidonServiceV20151101StartDataCollectionByAgentIdsMutationKey() {
  return [
    '#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartDataCollectionByAgentIds',
    '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartDataCollectionByAgentIds',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSPoseidonServiceV20151101StartDataCollectionByAgentIdsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartDataCollectionByAgentIds']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartDataCollectionByAgentIds']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSPoseidonServiceV20151101StartDataCollectionByAgentIdsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartDataCollectionByAgentIds']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartDataCollectionByAgentIds'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetAWSPoseidonServiceV20151101StartDataCollectionByAgentIds<
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
                  (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartDataCollectionByAgentIds']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartDataCollectionByAgentIds']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSPoseidonServiceV20151101StartDataCollectionByAgentIdsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSPoseidonServiceV20151101StartExportTaskMutationKey() {
  return [
    '#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartExportTask',
    '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartExportTask',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSPoseidonServiceV20151101StartExportTaskMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartExportTask']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartExportTask']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSPoseidonServiceV20151101StartExportTaskMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartExportTask']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartExportTask'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSPoseidonServiceV20151101StartExportTask<
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
                  (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartExportTask']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartExportTask']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSPoseidonServiceV20151101StartExportTaskMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSPoseidonServiceV20151101StartImportTaskMutationKey() {
  return [
    '#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartImportTask',
    '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartImportTask',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSPoseidonServiceV20151101StartImportTaskMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartImportTask']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartImportTask']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSPoseidonServiceV20151101StartImportTaskMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartImportTask']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartImportTask'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSPoseidonServiceV20151101StartImportTask<
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
                  (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartImportTask']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartImportTask']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSPoseidonServiceV20151101StartImportTaskMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSPoseidonServiceV20151101StopContinuousExportMutationKey() {
  return [
    '#X-Amz-Target=AWSPoseidonService_V2015_11_01.StopContinuousExport',
    '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.StopContinuousExport',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSPoseidonServiceV20151101StopContinuousExportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StopContinuousExport']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StopContinuousExport']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSPoseidonServiceV20151101StopContinuousExportMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StopContinuousExport']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StopContinuousExport'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetAWSPoseidonServiceV20151101StopContinuousExport<
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
                  (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StopContinuousExport']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StopContinuousExport']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSPoseidonServiceV20151101StopContinuousExportMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSPoseidonServiceV20151101StopDataCollectionByAgentIdsMutationKey() {
  return [
    '#X-Amz-Target=AWSPoseidonService_V2015_11_01.StopDataCollectionByAgentIds',
    '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.StopDataCollectionByAgentIds',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSPoseidonServiceV20151101StopDataCollectionByAgentIdsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StopDataCollectionByAgentIds']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StopDataCollectionByAgentIds']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSPoseidonServiceV20151101StopDataCollectionByAgentIdsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StopDataCollectionByAgentIds']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StopDataCollectionByAgentIds'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetAWSPoseidonServiceV20151101StopDataCollectionByAgentIds<
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
                  (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StopDataCollectionByAgentIds']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StopDataCollectionByAgentIds']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSPoseidonServiceV20151101StopDataCollectionByAgentIdsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSPoseidonServiceV20151101UpdateApplicationMutationKey() {
  return [
    '#X-Amz-Target=AWSPoseidonService_V2015_11_01.UpdateApplication',
    '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.UpdateApplication',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSPoseidonServiceV20151101UpdateApplicationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.UpdateApplication']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.UpdateApplication']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSPoseidonServiceV20151101UpdateApplicationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.UpdateApplication']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSPoseidonService_V2015_11_01.UpdateApplication'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetAWSPoseidonServiceV20151101UpdateApplication<
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
                  (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.UpdateApplication']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.UpdateApplication']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSPoseidonServiceV20151101UpdateApplicationMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
