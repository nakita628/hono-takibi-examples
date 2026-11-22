import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessSearchUsersRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAlexaForBusinessSearchUsersHandler = app.openapi(
  postXAmzTargetAlexaForBusinessSearchUsersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
