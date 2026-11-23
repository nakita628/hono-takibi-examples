import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSPoseidonServiceV20151101StopDataCollectionByAgentIdsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsPoseidonServiceV20151101StopDataCollectionByAgentIdsHandler = app.openapi(
  postXAmzTargetAWSPoseidonServiceV20151101StopDataCollectionByAgentIdsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
