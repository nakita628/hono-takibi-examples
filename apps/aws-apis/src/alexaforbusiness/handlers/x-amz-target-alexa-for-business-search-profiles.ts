import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessSearchProfilesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAlexaForBusinessSearchProfilesHandler = app.openapi(
  postXAmzTargetAlexaForBusinessSearchProfilesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
