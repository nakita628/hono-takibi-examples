import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSPoseidonServiceV20151101StartDataCollectionByAgentIdsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSPoseidonServiceV20151101StartDataCollectionByAgentIdsHandler =
  app.openapi(postXAmzTargetAWSPoseidonServiceV20151101StartDataCollectionByAgentIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
