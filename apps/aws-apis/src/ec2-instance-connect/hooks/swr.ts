import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetAWSEC2InstanceConnectServiceSendSSHPublicKeyKey() {
  return ['#X-Amz-Target=AWSEC2InstanceConnectService.SendSSHPublicKey'] as const
}

export function getXAmzTargetAWSEC2InstanceConnectServiceSendSerialConsoleSSHPublicKeyKey() {
  return ['#X-Amz-Target=AWSEC2InstanceConnectService.SendSerialConsoleSSHPublicKey'] as const
}

export function getPostXAmzTargetAWSEC2InstanceConnectServiceSendSSHPublicKeyKey() {
  return [
    '#X-Amz-Target=AWSEC2InstanceConnectService.SendSSHPublicKey',
    '/#X-Amz-Target=AWSEC2InstanceConnectService.SendSSHPublicKey',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSEC2InstanceConnectServiceSendSSHPublicKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSEC2InstanceConnectService.SendSSHPublicKey']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSEC2InstanceConnectServiceSendSSHPublicKeyKey()
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
            (typeof client)['#X-Amz-Target=AWSEC2InstanceConnectService.SendSSHPublicKey']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSEC2InstanceConnectService.SendSSHPublicKey'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSEC2InstanceConnectServiceSendSerialConsoleSSHPublicKeyKey() {
  return [
    '#X-Amz-Target=AWSEC2InstanceConnectService.SendSerialConsoleSSHPublicKey',
    '/#X-Amz-Target=AWSEC2InstanceConnectService.SendSerialConsoleSSHPublicKey',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSEC2InstanceConnectServiceSendSerialConsoleSSHPublicKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSEC2InstanceConnectService.SendSerialConsoleSSHPublicKey']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSEC2InstanceConnectServiceSendSerialConsoleSSHPublicKeyKey()
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
            (typeof client)['#X-Amz-Target=AWSEC2InstanceConnectService.SendSerialConsoleSSHPublicKey']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSEC2InstanceConnectService.SendSerialConsoleSSHPublicKey'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
