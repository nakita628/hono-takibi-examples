import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDMSv20160101DescribeApplicableIndividualAssessmentsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonDmSv20160101DescribeApplicableIndividualAssessmentsHandler =
  app.openapi(postXAmzTargetAmazonDMSv20160101DescribeApplicableIndividualAssessmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
