import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionAssociateDataShareConsumerRoute,
  postActionAssociateDataShareConsumerRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionAssociateDataShareConsumerHandler = app
  .openapi(getActionAssociateDataShareConsumerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionAssociateDataShareConsumerRoute, (c) => {
    throw new Error('Not implemented')
  })
