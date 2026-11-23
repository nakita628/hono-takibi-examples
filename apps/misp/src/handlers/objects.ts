import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteObjectsDeleteObjectIdHardDeleteRoute,
  getObjectsViewObjectIdRoute,
  postObjectsAddEventIdObjectTemplateIdRoute,
  postObjectsRestsearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const objectsHandler = app
  .openapi(postObjectsRestsearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postObjectsAddEventIdObjectTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getObjectsViewObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteObjectsDeleteObjectIdHardDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
