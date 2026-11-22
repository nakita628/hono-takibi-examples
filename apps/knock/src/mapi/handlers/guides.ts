import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1GuidesGuideKeyRoute,
  getV1GuidesGuideKeyRoute,
  getV1GuidesRoute,
  putV1GuidesGuideKeyActivateRoute,
  putV1GuidesGuideKeyRoute,
  putV1GuidesGuideKeyUnarchiveRoute,
  putV1GuidesGuideKeyValidateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const guidesHandler = app
  .openapi(putV1GuidesGuideKeyActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1GuidesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1GuidesGuideKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1GuidesGuideKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1GuidesGuideKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1GuidesGuideKeyValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1GuidesGuideKeyUnarchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
