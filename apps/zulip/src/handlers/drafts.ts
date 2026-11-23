import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDraftsDraftIdRoute,
  getDraftsRoute,
  patchDraftsDraftIdRoute,
  postDraftsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const draftsHandler = app
  .openapi(getDraftsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDraftsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDraftsDraftIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDraftsDraftIdRoute, (c) => {
    throw new Error('Not implemented')
  })
