import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2GuaranteedOrdersGuaranteedOrderIdRoute,
  getV2GuaranteedOrdersRoute,
  patchV2GuaranteedOrdersGuaranteedOrderIdRoute,
  postV2GuaranteedOrdersGuaranteedOrderIdEditGuaranteedOrderReadAccessorsRoute,
  postV2GuaranteedOrdersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const guaranteedOrdersHandler = app
  .openapi(getV2GuaranteedOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2GuaranteedOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2GuaranteedOrdersGuaranteedOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2GuaranteedOrdersGuaranteedOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2GuaranteedOrdersGuaranteedOrderIdEditGuaranteedOrderReadAccessorsRoute, (c) => {
    throw new Error('Not implemented')
  })
