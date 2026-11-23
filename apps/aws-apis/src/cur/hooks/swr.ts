import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostXAmzTargetAWSOrigamiServiceGatewayServiceDeleteReportDefinitionKey() {
  return [
    '#X-Amz-Target=AWSOrigamiServiceGatewayService.DeleteReportDefinition',
    '/#X-Amz-Target=AWSOrigamiServiceGatewayService.DeleteReportDefinition',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSOrigamiServiceGatewayServiceDeleteReportDefinition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrigamiServiceGatewayService.DeleteReportDefinition']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSOrigamiServiceGatewayServiceDeleteReportDefinitionKey()
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
            (typeof client)['#X-Amz-Target=AWSOrigamiServiceGatewayService.DeleteReportDefinition']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSOrigamiServiceGatewayService.DeleteReportDefinition'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSOrigamiServiceGatewayServiceDescribeReportDefinitionsKey() {
  return [
    '#X-Amz-Target=AWSOrigamiServiceGatewayService.DescribeReportDefinitions',
    '/#X-Amz-Target=AWSOrigamiServiceGatewayService.DescribeReportDefinitions',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSOrigamiServiceGatewayServiceDescribeReportDefinitions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrigamiServiceGatewayService.DescribeReportDefinitions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSOrigamiServiceGatewayServiceDescribeReportDefinitionsKey()
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
            (typeof client)['#X-Amz-Target=AWSOrigamiServiceGatewayService.DescribeReportDefinitions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSOrigamiServiceGatewayService.DescribeReportDefinitions'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSOrigamiServiceGatewayServiceModifyReportDefinitionKey() {
  return [
    '#X-Amz-Target=AWSOrigamiServiceGatewayService.ModifyReportDefinition',
    '/#X-Amz-Target=AWSOrigamiServiceGatewayService.ModifyReportDefinition',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSOrigamiServiceGatewayServiceModifyReportDefinition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrigamiServiceGatewayService.ModifyReportDefinition']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSOrigamiServiceGatewayServiceModifyReportDefinitionKey()
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
            (typeof client)['#X-Amz-Target=AWSOrigamiServiceGatewayService.ModifyReportDefinition']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSOrigamiServiceGatewayService.ModifyReportDefinition'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSOrigamiServiceGatewayServicePutReportDefinitionKey() {
  return [
    '#X-Amz-Target=AWSOrigamiServiceGatewayService.PutReportDefinition',
    '/#X-Amz-Target=AWSOrigamiServiceGatewayService.PutReportDefinition',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSOrigamiServiceGatewayServicePutReportDefinition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrigamiServiceGatewayService.PutReportDefinition']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSOrigamiServiceGatewayServicePutReportDefinitionKey()
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
            (typeof client)['#X-Amz-Target=AWSOrigamiServiceGatewayService.PutReportDefinition']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSOrigamiServiceGatewayService.PutReportDefinition'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
