import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSSMContactsDescribePageRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSSMContactsDescribePageHandler = app.openapi(
  postXAmzTargetSSMContactsDescribePageRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
