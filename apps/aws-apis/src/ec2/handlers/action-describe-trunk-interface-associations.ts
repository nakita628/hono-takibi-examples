import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeTrunkInterfaceAssociationsRoute,
  postActionDescribeTrunkInterfaceAssociationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeTrunkInterfaceAssociationsHandler = app
  .openapi(getActionDescribeTrunkInterfaceAssociationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeTrunkInterfaceAssociationsRoute, (c) => {
    throw new Error('Not implemented')
  })
