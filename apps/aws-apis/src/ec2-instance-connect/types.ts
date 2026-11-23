type SendSSHPublicKeyRequest = {
  InstanceId: {}
  InstanceOSUser: {}
  SSHPublicKey: {}
  AvailabilityZone?: {} | undefined
}
type SendSSHPublicKeyResponse = { RequestId?: {} | undefined; Success?: {} | undefined }
type SendSerialConsoleSSHPublicKeyRequest = {
  InstanceId: {}
  SerialPort?: {} | undefined
  SSHPublicKey: {}
}
type SendSerialConsoleSSHPublicKeyResponse = {
  RequestId?: {} | undefined
  Success?: {} | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=AWSEC2InstanceConnectService.SendSSHPublicKey': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSEC2InstanceConnectService.SendSSHPublicKey'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: SendSSHPublicKeyRequest }
        output: SendSSHPublicKeyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSEC2InstanceConnectService.SendSerialConsoleSSHPublicKey': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSEC2InstanceConnectService.SendSerialConsoleSSHPublicKey'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: SendSerialConsoleSSHPublicKeyRequest }
        output: SendSerialConsoleSSHPublicKeyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
