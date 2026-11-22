import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerGetSearchSuggestionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerGetSearchSuggestionsHandler = app.openapi(
  postXAmzTargetSageMakerGetSearchSuggestionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
