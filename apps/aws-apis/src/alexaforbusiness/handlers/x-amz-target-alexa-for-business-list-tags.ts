import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessListTagsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAlexaForBusinessListTagsHandler = app.openapi(
  postXAmzTargetAlexaForBusinessListTagsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
