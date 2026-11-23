import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSSimbaAPIServiceV20180301DescribeStorageVirtualMachinesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsSimbaApiServiceV20180301DescribeStorageVirtualMachinesHandler =
  app.openapi(postXAmzTargetAWSSimbaAPIServiceV20180301DescribeStorageVirtualMachinesRoute, (c) => {
    throw new Error('Not implemented')
  })
