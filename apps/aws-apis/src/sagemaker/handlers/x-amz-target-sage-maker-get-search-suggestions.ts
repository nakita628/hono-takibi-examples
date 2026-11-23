import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerGetSearchSuggestionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerGetSearchSuggestionsHandler = app.openapi(
  postXAmzTargetSageMakerGetSearchSuggestionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
