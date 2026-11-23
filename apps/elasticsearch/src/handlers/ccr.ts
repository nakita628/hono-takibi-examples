import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCcrAutoFollowNameRoute,
  getCcrAutoFollowNameRoute,
  getCcrAutoFollowRoute,
  getCcrStatsRoute,
  postCcrAutoFollowNamePauseRoute,
  postCcrAutoFollowNameResumeRoute,
  putCcrAutoFollowNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ccrHandler = app
  .openapi(getCcrAutoFollowNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCcrAutoFollowNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCcrAutoFollowNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCcrAutoFollowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCcrAutoFollowNamePauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCcrAutoFollowNameResumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCcrStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
