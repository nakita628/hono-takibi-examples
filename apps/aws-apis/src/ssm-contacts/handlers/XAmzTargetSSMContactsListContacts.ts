import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSSMContactsListContactsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSSMContactsListContactsHandler = app.openapi(
  postXAmzTargetSSMContactsListContactsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
