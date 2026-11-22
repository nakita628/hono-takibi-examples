import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOndemandPagesOndemandIdRoute,
  getMeOndemandPagesRoute,
  getOndemandPagesOndemandIdRoute,
  getUsersUserIdOndemandPagesRoute,
  patchOndemandPagesOndemandIdRoute,
  postMeOndemandPagesRoute,
  postUsersUserIdOndemandPagesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const onDemandEssentialsHandler = app
  .openapi(getMeOndemandPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeOndemandPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOndemandPagesOndemandIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOndemandPagesOndemandIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOndemandPagesOndemandIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOndemandPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdOndemandPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
