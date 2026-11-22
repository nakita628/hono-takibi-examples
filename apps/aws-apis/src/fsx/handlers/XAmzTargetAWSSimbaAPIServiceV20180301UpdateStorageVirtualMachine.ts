import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSSimbaAPIServiceV20180301UpdateStorageVirtualMachineRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSSimbaAPIServiceV20180301UpdateStorageVirtualMachineHandler = app.openapi(
  postXAmzTargetAWSSimbaAPIServiceV20180301UpdateStorageVirtualMachineRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
