import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getIdsContentHashesContentHashIndexRoute,
  getIdsContentHashesContentHashReferencesRoute,
  getIdsContentIdsContentIdIndexRoute,
  getIdsContentIdsContentIdReferencesRoute,
  getIdsGlobalIdsGlobalIdReferencesRoute,
  getIdsGlobalIdsGlobalIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const idsHandler = app
  .openapi(getIdsContentHashesContentHashIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdsContentHashesContentHashReferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdsContentIdsContentIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdsContentIdsContentIdReferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdsGlobalIdsGlobalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdsGlobalIdsGlobalIdReferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
