import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFindingsfiltersIdRoute,
  getFindingsfiltersIdRoute,
  getFindingsfiltersRoute,
  patchFindingsfiltersIdRoute,
  postFindingsfiltersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const findingsfiltersHandler = app
  .openapi(postFindingsfiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFindingsfiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFindingsfiltersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFindingsfiltersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchFindingsfiltersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
