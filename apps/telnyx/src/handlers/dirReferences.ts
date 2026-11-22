import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDirDirIdReferencesRoute,
  patchDirDirIdReferencesRefTypeSlotRoute,
  postDirDirIdReferencesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dirReferencesHandler = app
  .openapi(getDirDirIdReferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirDirIdReferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDirDirIdReferencesRefTypeSlotRoute, (c) => {
    throw new Error('Not implemented')
  })
