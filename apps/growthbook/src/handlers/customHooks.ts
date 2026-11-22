import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1CustomHooksIdRoute,
  getV1CustomHooksIdHistoryRoute,
  getV1CustomHooksIdRoute,
  getV1CustomHooksRoute,
  postV1CustomHooksIdRevertRoute,
  postV1CustomHooksIdRoute,
  postV1CustomHooksRoute,
  postV1CustomHooksTestRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customHooksHandler = app
  .openapi(getV1CustomHooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CustomHooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CustomHooksTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CustomHooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CustomHooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1CustomHooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CustomHooksIdHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CustomHooksIdRevertRoute, (c) => {
    throw new Error('Not implemented')
  })
