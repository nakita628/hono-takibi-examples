import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSSMContactsListContactsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSsmContactsListContactsHandler = app.openapi(
  postXAmzTargetSSMContactsListContactsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
