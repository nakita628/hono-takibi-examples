import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessDeleteContactRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAlexaForBusinessDeleteContactHandler = app.openapi(
  postXAmzTargetAlexaForBusinessDeleteContactRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
