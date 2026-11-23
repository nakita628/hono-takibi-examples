import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessSearchContactsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAlexaForBusinessSearchContactsHandler = app.openapi(
  postXAmzTargetAlexaForBusinessSearchContactsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
