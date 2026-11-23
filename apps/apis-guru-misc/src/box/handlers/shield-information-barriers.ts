import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getShieldInformationBarriersRoute,
  getShieldInformationBarriersShieldInformationBarrierIdRoute,
  postShieldInformationBarriersChangeStatusRoute,
  postShieldInformationBarriersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const shieldInformationBarriersHandler = app
  .openapi(getShieldInformationBarriersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postShieldInformationBarriersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postShieldInformationBarriersChangeStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShieldInformationBarriersShieldInformationBarrierIdRoute, (c) => {
    throw new Error('Not implemented')
  })
