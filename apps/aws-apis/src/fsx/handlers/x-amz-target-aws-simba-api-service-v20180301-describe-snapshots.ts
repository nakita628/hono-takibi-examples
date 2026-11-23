import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSSimbaAPIServiceV20180301DescribeSnapshotsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsSimbaApiServiceV20180301DescribeSnapshotsHandler = app.openapi(
  postXAmzTargetAWSSimbaAPIServiceV20180301DescribeSnapshotsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
