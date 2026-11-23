import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSSimbaAPIServiceV20180301CreateStorageVirtualMachineRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsSimbaApiServiceV20180301CreateStorageVirtualMachineHandler = app.openapi(
  postXAmzTargetAWSSimbaAPIServiceV20180301CreateStorageVirtualMachineRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
