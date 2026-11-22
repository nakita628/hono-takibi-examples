import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2EventTypesEventTypeIdPrivateLinksLinkIdRoute,
  getV2EventTypesEventTypeIdPrivateLinksRoute,
  patchV2EventTypesEventTypeIdPrivateLinksLinkIdRoute,
  postV2EventTypesEventTypeIdPrivateLinksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const eventTypesPrivateLinksHandler = app
  .openapi(postV2EventTypesEventTypeIdPrivateLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EventTypesEventTypeIdPrivateLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2EventTypesEventTypeIdPrivateLinksLinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2EventTypesEventTypeIdPrivateLinksLinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
