import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteVersionWhatsAppBusinessAccountIDAssignedUsersRoute,
  getVersionWhatsAppBusinessAccountIDAssignedUsersRoute,
  postVersionWhatsAppBusinessAccountIDAssignedUsersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const whatsAppBusinessAccountUsersHandler = app
  .openapi(getVersionWhatsAppBusinessAccountIDAssignedUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionWhatsAppBusinessAccountIDAssignedUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVersionWhatsAppBusinessAccountIDAssignedUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
