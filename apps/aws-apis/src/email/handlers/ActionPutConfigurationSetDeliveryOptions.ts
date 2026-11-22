import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionPutConfigurationSetDeliveryOptionsRoute,
  postActionPutConfigurationSetDeliveryOptionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionPutConfigurationSetDeliveryOptionsHandler = app
  .openapi(getActionPutConfigurationSetDeliveryOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionPutConfigurationSetDeliveryOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
