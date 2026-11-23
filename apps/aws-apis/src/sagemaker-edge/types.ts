type GetDeploymentsResult = { Deployments?: {} | undefined }
type InternalServiceException = { [x: string]: unknown }
type GetDeviceRegistrationResult = {
  DeviceRegistration?: {} | undefined
  CacheTTL?: {} | undefined
}
type EdgeMetric = {
  Dimension?: {} | undefined
  MetricName?: {} | undefined
  Value?: {} | undefined
  Timestamp?: {} | undefined
}
type Model = {
  ModelName?: {} | undefined
  ModelVersion?: {} | undefined
  LatestSampleTime?: {} | undefined
  LatestInference?: {} | undefined
  ModelMetrics?: {} | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/GetDeployments': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { DeviceName: string; DeviceFleetName: string } }
            output: GetDeploymentsResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { DeviceName: string; DeviceFleetName: string } }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/GetDeviceRegistration': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { DeviceName: string; DeviceFleetName: string } }
            output: GetDeviceRegistrationResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { DeviceName: string; DeviceFleetName: string } }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/SendHeartbeat': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                AgentMetrics?: EdgeMetric[] | undefined
                Models?: Model[] | undefined
                AgentVersion: string
                DeviceName: string
                DeviceFleetName: string
                DeploymentResult?:
                  | {
                      DeploymentName?: {} | undefined
                      DeploymentStatus?: {} | undefined
                      DeploymentStatusMessage?: {} | undefined
                      DeploymentStartTime?: {} | undefined
                      DeploymentEndTime?: {} | undefined
                      DeploymentModels?: {} | undefined
                    }
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                AgentMetrics?: EdgeMetric[] | undefined
                Models?: Model[] | undefined
                AgentVersion: string
                DeviceName: string
                DeviceFleetName: string
                DeploymentResult?:
                  | {
                      DeploymentName?: {} | undefined
                      DeploymentStatus?: {} | undefined
                      DeploymentStatusMessage?: {} | undefined
                      DeploymentStartTime?: {} | undefined
                      DeploymentEndTime?: {} | undefined
                      DeploymentModels?: {} | undefined
                    }
                  | undefined
              }
            }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
    }
  },
  '/'
>
export default routes
