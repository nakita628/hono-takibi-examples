import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListModelCardsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerListModelCardsHandler = app.openapi(
  postXAmzTargetSageMakerListModelCardsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
