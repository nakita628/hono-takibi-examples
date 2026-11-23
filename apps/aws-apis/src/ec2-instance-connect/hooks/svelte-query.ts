import { createMutation, mutationOptions } from '@tanstack/svelte-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetAWSEC2InstanceConnectServiceSendSSHPublicKeyKey() {
  return ['#X-Amz-Target=AWSEC2InstanceConnectService.SendSSHPublicKey'] as const
}

export function getXAmzTargetAWSEC2InstanceConnectServiceSendSerialConsoleSSHPublicKeyKey() {
  return ['#X-Amz-Target=AWSEC2InstanceConnectService.SendSerialConsoleSSHPublicKey'] as const
}

export function getPostXAmzTargetAWSEC2InstanceConnectServiceSendSSHPublicKeyMutationKey() {
  return [
    '#X-Amz-Target=AWSEC2InstanceConnectService.SendSSHPublicKey',
    '/#X-Amz-Target=AWSEC2InstanceConnectService.SendSSHPublicKey',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSEC2InstanceConnectServiceSendSSHPublicKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSEC2InstanceConnectService.SendSSHPublicKey']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSEC2InstanceConnectService.SendSSHPublicKey']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSEC2InstanceConnectServiceSendSSHPublicKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSEC2InstanceConnectService.SendSSHPublicKey']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSEC2InstanceConnectService.SendSSHPublicKey'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSEC2InstanceConnectServiceSendSSHPublicKey<
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
                  (typeof client)['#X-Amz-Target=AWSEC2InstanceConnectService.SendSSHPublicKey']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSEC2InstanceConnectService.SendSSHPublicKey']['$post']
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
      getPostXAmzTargetAWSEC2InstanceConnectServiceSendSSHPublicKeyMutationOptions<
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

export function getPostXAmzTargetAWSEC2InstanceConnectServiceSendSerialConsoleSSHPublicKeyMutationKey() {
  return [
    '#X-Amz-Target=AWSEC2InstanceConnectService.SendSerialConsoleSSHPublicKey',
    '/#X-Amz-Target=AWSEC2InstanceConnectService.SendSerialConsoleSSHPublicKey',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSEC2InstanceConnectServiceSendSerialConsoleSSHPublicKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSEC2InstanceConnectService.SendSerialConsoleSSHPublicKey']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSEC2InstanceConnectService.SendSerialConsoleSSHPublicKey']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSEC2InstanceConnectServiceSendSerialConsoleSSHPublicKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSEC2InstanceConnectService.SendSerialConsoleSSHPublicKey']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSEC2InstanceConnectService.SendSerialConsoleSSHPublicKey'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAWSEC2InstanceConnectServiceSendSerialConsoleSSHPublicKey<
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
                  (typeof client)['#X-Amz-Target=AWSEC2InstanceConnectService.SendSerialConsoleSSHPublicKey']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSEC2InstanceConnectService.SendSerialConsoleSSHPublicKey']['$post']
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
      getPostXAmzTargetAWSEC2InstanceConnectServiceSendSerialConsoleSSHPublicKeyMutationOptions<
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
