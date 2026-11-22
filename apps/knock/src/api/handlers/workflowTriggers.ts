import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1NotifyCancelRoute, postV1NotifyRoute } from '../routes'

const app = new OpenAPIHono()

export const workflowTriggersHandler = app
  .openapi(postV1NotifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NotifyCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
