import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSSimbaAPIServiceV20180301DescribeDataRepositoryAssociationsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSSimbaAPIServiceV20180301DescribeDataRepositoryAssociationsHandler =
  app.openapi(
    postXAmzTargetAWSSimbaAPIServiceV20180301DescribeDataRepositoryAssociationsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
