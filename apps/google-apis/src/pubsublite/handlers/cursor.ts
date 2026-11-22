import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1CursorParentCursorsRoute, postV1CursorSubscriptionCommitCursorRoute } from '../routes'

const app = new OpenAPIHono()

export const cursorHandler = app
  .openapi(getV1CursorParentCursorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CursorSubscriptionCommitCursorRoute, (c) => {
    throw new Error('Not implemented')
  })
