import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getWWorkspaceDraftsGetKindPathRoute,
  getWWorkspaceDraftsGetOwnKindPathRoute,
  getWWorkspaceDraftsListRoute,
  postWWorkspaceDraftsDeleteForUserKindPathRoute,
  postWWorkspaceDraftsMigrateLegacyKindPathRoute,
  postWWorkspaceDraftsMoveKindPathRoute,
  postWWorkspaceDraftsTransferRoute,
  postWWorkspaceDraftsUpdateKindPathRoute,
} from '../routes'

const app = new OpenAPIHono()

export const draftHandler = app
  .openapi(getWWorkspaceDraftsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceDraftsGetKindPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceDraftsGetOwnKindPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceDraftsUpdateKindPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceDraftsDeleteForUserKindPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceDraftsMoveKindPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceDraftsTransferRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceDraftsMigrateLegacyKindPathRoute, (c) => {
    throw new Error('Not implemented')
  })
