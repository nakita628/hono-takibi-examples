import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4ProjectsIdRemoteMirrorsMirrorIdRoute,
  getApiV4ProjectsIdRemoteMirrorsMirrorIdPublicKeyRoute,
  getApiV4ProjectsIdRemoteMirrorsMirrorIdRoute,
  getApiV4ProjectsIdRemoteMirrorsRoute,
  postApiV4ProjectsIdRemoteMirrorsMirrorIdSyncRoute,
  postApiV4ProjectsIdRemoteMirrorsRoute,
  putApiV4ProjectsIdRemoteMirrorsMirrorIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const remoteMirrorsHandler = app
  .openapi(getApiV4ProjectsIdRemoteMirrorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdRemoteMirrorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdRemoteMirrorsMirrorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdRemoteMirrorsMirrorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdRemoteMirrorsMirrorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdRemoteMirrorsMirrorIdSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdRemoteMirrorsMirrorIdPublicKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
