import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSShineFrontendService20170701DescribeTextTranslationJobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsShineFrontendService20170701DescribeTextTranslationJobHandler =
  app.openapi(postXAmzTargetAWSShineFrontendService20170701DescribeTextTranslationJobRoute, (c) => {
    throw new Error('Not implemented')
  })
