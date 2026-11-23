import { useMutation, mutationOptions } from '@tanstack/preact-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetAWSOrigamiServiceGatewayServiceDeleteReportDefinitionKey() {
  return ['#X-Amz-Target=AWSOrigamiServiceGatewayService.DeleteReportDefinition'] as const
}

export function getXAmzTargetAWSOrigamiServiceGatewayServiceDescribeReportDefinitionsKey() {
  return ['#X-Amz-Target=AWSOrigamiServiceGatewayService.DescribeReportDefinitions'] as const
}

export function getXAmzTargetAWSOrigamiServiceGatewayServiceModifyReportDefinitionKey() {
  return ['#X-Amz-Target=AWSOrigamiServiceGatewayService.ModifyReportDefinition'] as const
}

export function getXAmzTargetAWSOrigamiServiceGatewayServicePutReportDefinitionKey() {
  return ['#X-Amz-Target=AWSOrigamiServiceGatewayService.PutReportDefinition'] as const
}

export function getPostXAmzTargetAWSOrigamiServiceGatewayServiceDeleteReportDefinitionMutationKey() {
  return [
    '#X-Amz-Target=AWSOrigamiServiceGatewayService.DeleteReportDefinition',
    '/#X-Amz-Target=AWSOrigamiServiceGatewayService.DeleteReportDefinition',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSOrigamiServiceGatewayServiceDeleteReportDefinitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSOrigamiServiceGatewayService.DeleteReportDefinition']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrigamiServiceGatewayService.DeleteReportDefinition']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSOrigamiServiceGatewayServiceDeleteReportDefinitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSOrigamiServiceGatewayService.DeleteReportDefinition']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSOrigamiServiceGatewayService.DeleteReportDefinition'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSOrigamiServiceGatewayServiceDeleteReportDefinition<
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
                  (typeof client)['#X-Amz-Target=AWSOrigamiServiceGatewayService.DeleteReportDefinition']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSOrigamiServiceGatewayService.DeleteReportDefinition']['$post']
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
    getPostXAmzTargetAWSOrigamiServiceGatewayServiceDeleteReportDefinitionMutationOptions<
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

export function getPostXAmzTargetAWSOrigamiServiceGatewayServiceDescribeReportDefinitionsMutationKey() {
  return [
    '#X-Amz-Target=AWSOrigamiServiceGatewayService.DescribeReportDefinitions',
    '/#X-Amz-Target=AWSOrigamiServiceGatewayService.DescribeReportDefinitions',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSOrigamiServiceGatewayServiceDescribeReportDefinitionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSOrigamiServiceGatewayService.DescribeReportDefinitions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrigamiServiceGatewayService.DescribeReportDefinitions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSOrigamiServiceGatewayServiceDescribeReportDefinitionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSOrigamiServiceGatewayService.DescribeReportDefinitions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSOrigamiServiceGatewayService.DescribeReportDefinitions'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSOrigamiServiceGatewayServiceDescribeReportDefinitions<
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
                  (typeof client)['#X-Amz-Target=AWSOrigamiServiceGatewayService.DescribeReportDefinitions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSOrigamiServiceGatewayService.DescribeReportDefinitions']['$post']
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
    getPostXAmzTargetAWSOrigamiServiceGatewayServiceDescribeReportDefinitionsMutationOptions<
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

export function getPostXAmzTargetAWSOrigamiServiceGatewayServiceModifyReportDefinitionMutationKey() {
  return [
    '#X-Amz-Target=AWSOrigamiServiceGatewayService.ModifyReportDefinition',
    '/#X-Amz-Target=AWSOrigamiServiceGatewayService.ModifyReportDefinition',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSOrigamiServiceGatewayServiceModifyReportDefinitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSOrigamiServiceGatewayService.ModifyReportDefinition']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrigamiServiceGatewayService.ModifyReportDefinition']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSOrigamiServiceGatewayServiceModifyReportDefinitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSOrigamiServiceGatewayService.ModifyReportDefinition']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSOrigamiServiceGatewayService.ModifyReportDefinition'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSOrigamiServiceGatewayServiceModifyReportDefinition<
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
                  (typeof client)['#X-Amz-Target=AWSOrigamiServiceGatewayService.ModifyReportDefinition']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSOrigamiServiceGatewayService.ModifyReportDefinition']['$post']
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
    getPostXAmzTargetAWSOrigamiServiceGatewayServiceModifyReportDefinitionMutationOptions<
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

export function getPostXAmzTargetAWSOrigamiServiceGatewayServicePutReportDefinitionMutationKey() {
  return [
    '#X-Amz-Target=AWSOrigamiServiceGatewayService.PutReportDefinition',
    '/#X-Amz-Target=AWSOrigamiServiceGatewayService.PutReportDefinition',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSOrigamiServiceGatewayServicePutReportDefinitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSOrigamiServiceGatewayService.PutReportDefinition']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrigamiServiceGatewayService.PutReportDefinition']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSOrigamiServiceGatewayServicePutReportDefinitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSOrigamiServiceGatewayService.PutReportDefinition']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSOrigamiServiceGatewayService.PutReportDefinition'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSOrigamiServiceGatewayServicePutReportDefinition<
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
                  (typeof client)['#X-Amz-Target=AWSOrigamiServiceGatewayService.PutReportDefinition']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSOrigamiServiceGatewayService.PutReportDefinition']['$post']
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
    getPostXAmzTargetAWSOrigamiServiceGatewayServicePutReportDefinitionMutationOptions<
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
