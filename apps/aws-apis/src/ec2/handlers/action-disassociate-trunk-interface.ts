import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDisassociateTrunkInterfaceRoute,
  postActionDisassociateTrunkInterfaceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDisassociateTrunkInterfaceHandler = app
  .openapi(getActionDisassociateTrunkInterfaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDisassociateTrunkInterfaceRoute, (c) => {
    throw new Error('Not implemented')
  })
