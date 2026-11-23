import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTelegrafsTelegrafIDLabelsLabelIDRoute,
  deleteTelegrafsTelegrafIDMembersUserIDRoute,
  deleteTelegrafsTelegrafIDOwnersUserIDRoute,
  deleteTelegrafsTelegrafIDRoute,
  getTelegrafsRoute,
  getTelegrafsTelegrafIDLabelsRoute,
  getTelegrafsTelegrafIDMembersRoute,
  getTelegrafsTelegrafIDOwnersRoute,
  getTelegrafsTelegrafIDRoute,
  postTelegrafsRoute,
  postTelegrafsTelegrafIDLabelsRoute,
  postTelegrafsTelegrafIDMembersRoute,
  postTelegrafsTelegrafIDOwnersRoute,
  putTelegrafsTelegrafIDRoute,
} from '../routes'

const app = new OpenAPIHono()

export const telegrafsHandler = app
  .openapi(getTelegrafsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTelegrafsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTelegrafsTelegrafIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTelegrafsTelegrafIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTelegrafsTelegrafIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTelegrafsTelegrafIDLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTelegrafsTelegrafIDLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTelegrafsTelegrafIDLabelsLabelIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTelegrafsTelegrafIDMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTelegrafsTelegrafIDMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTelegrafsTelegrafIDMembersUserIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTelegrafsTelegrafIDOwnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTelegrafsTelegrafIDOwnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTelegrafsTelegrafIDOwnersUserIDRoute, (c) => {
    throw new Error('Not implemented')
  })
