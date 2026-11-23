import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSSimbaAPIServiceV20180301DeleteStorageVirtualMachineRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsSimbaApiServiceV20180301DeleteStorageVirtualMachineHandler = app.openapi(
  postXAmzTargetAWSSimbaAPIServiceV20180301DeleteStorageVirtualMachineRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
