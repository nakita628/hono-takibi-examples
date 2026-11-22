import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getClubsIdMembersRoute,
  getClubsIdRelationsRoute,
  getClubsIdRoute,
  getClubsIdStaffRoute,
  getClubsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const clubsHandler = app
  .openapi(getClubsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClubsIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClubsIdStaffRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClubsIdRelationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClubsRoute, (c) => {
    throw new Error('Not implemented')
  })
