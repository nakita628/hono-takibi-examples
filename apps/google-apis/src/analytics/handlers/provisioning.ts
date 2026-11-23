import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postProvisioningCreateAccountTicketRoute,
  postProvisioningCreateAccountTreeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const provisioningHandler = app
  .openapi(postProvisioningCreateAccountTicketRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvisioningCreateAccountTreeRoute, (c) => {
    throw new Error('Not implemented')
  })
