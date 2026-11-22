import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessDeleteContactRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAlexaForBusinessDeleteContactHandler = app.openapi(
  postXAmzTargetAlexaForBusinessDeleteContactRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
