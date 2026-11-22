import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2EventTypesEventTypeIdRoute,
  getV2EventTypesEventTypeIdRoute,
  getV2EventTypesRoute,
  patchV2EventTypesEventTypeIdRoute,
  postV2EventTypesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const eventTypesHandler = app
  .openapi(postV2EventTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EventTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EventTypesEventTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2EventTypesEventTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2EventTypesEventTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
