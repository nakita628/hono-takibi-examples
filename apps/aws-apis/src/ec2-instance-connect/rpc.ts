import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetAWSEC2InstanceConnectServiceSendSSHPublicKey(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSEC2InstanceConnectService.SendSSHPublicKey']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSEC2InstanceConnectService.SendSSHPublicKey'].$post(args, options),
  )
}

export async function postXAmzTargetAWSEC2InstanceConnectServiceSendSerialConsoleSSHPublicKey(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSEC2InstanceConnectService.SendSerialConsoleSSHPublicKey']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSEC2InstanceConnectService.SendSerialConsoleSSHPublicKey'].$post(
      args,
      options,
    ),
  )
}
