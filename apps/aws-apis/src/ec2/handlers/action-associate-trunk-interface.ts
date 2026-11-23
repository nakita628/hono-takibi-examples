import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionAssociateTrunkInterfaceRoute,
  postActionAssociateTrunkInterfaceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionAssociateTrunkInterfaceHandler = app
  .openapi(getActionAssociateTrunkInterfaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionAssociateTrunkInterfaceRoute, (c) => {
    throw new Error('Not implemented')
  })
