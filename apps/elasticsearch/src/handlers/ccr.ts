import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCcrAutoFollowNameRoute,
  getCcrAutoFollowNameRoute,
  getCcrAutoFollowRoute,
  getCcrStatsRoute,
  getIndexCcrInfoRoute,
  getIndexCcrStatsRoute,
  postCcrAutoFollowNamePauseRoute,
  postCcrAutoFollowNameResumeRoute,
  postIndexCcrForgetFollowerRoute,
  postIndexCcrPauseFollowRoute,
  postIndexCcrResumeFollowRoute,
  postIndexCcrUnfollowRoute,
  putCcrAutoFollowNameRoute,
  putIndexCcrFollowRoute,
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
  .openapi(putIndexCcrFollowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexCcrInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexCcrStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexCcrForgetFollowerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCcrAutoFollowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCcrAutoFollowNamePauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexCcrPauseFollowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCcrAutoFollowNameResumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexCcrResumeFollowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCcrStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexCcrUnfollowRoute, (c) => {
    throw new Error('Not implemented')
  })
