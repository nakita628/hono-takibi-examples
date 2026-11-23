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

export function injectPostXAmzTargetAWSOrigamiServiceGatewayServiceDeleteReportDefinition<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSOrigamiServiceGatewayServiceDeleteReportDefinitionMutationOptions<
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

export function injectPostXAmzTargetAWSOrigamiServiceGatewayServiceDescribeReportDefinitions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSOrigamiServiceGatewayServiceDescribeReportDefinitionsMutationOptions<
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

export function injectPostXAmzTargetAWSOrigamiServiceGatewayServiceModifyReportDefinition<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSOrigamiServiceGatewayServiceModifyReportDefinitionMutationOptions<
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

export function injectPostXAmzTargetAWSOrigamiServiceGatewayServicePutReportDefinition<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSOrigamiServiceGatewayServicePutReportDefinitionMutationOptions<
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
