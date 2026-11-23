import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSSimbaAPIServiceV20180301DescribeBackupsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsSimbaApiServiceV20180301DescribeBackupsHandler = app.openapi(
  postXAmzTargetAWSSimbaAPIServiceV20180301DescribeBackupsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
