import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDisassociateDataShareConsumerRoute,
  postActionDisassociateDataShareConsumerRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDisassociateDataShareConsumerHandler = app
  .openapi(getActionDisassociateDataShareConsumerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDisassociateDataShareConsumerRoute, (c) => {
    throw new Error('Not implemented')
  })
