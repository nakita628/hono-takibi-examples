import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorks20130218DescribeStackProvisioningParametersRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOpsWorks20130218DescribeStackProvisioningParametersHandler = app.openapi(
  postXAmzTargetOpsWorks20130218DescribeStackProvisioningParametersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
