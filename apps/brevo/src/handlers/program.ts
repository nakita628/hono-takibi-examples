import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteLoyaltyConfigProgramsPidContactCidRoute,
  deleteLoyaltyConfigProgramsPidRoute,
  deleteLoyaltyConfigProgramsPidSubscriptionMembersRoute,
  getLoyaltyConfigProgramsPidAccountInfoRoute,
  getLoyaltyConfigProgramsPidRoute,
  getLoyaltyConfigProgramsRoute,
  patchLoyaltyConfigProgramsPidRoute,
  postLoyaltyConfigProgramsPidPublishRoute,
  postLoyaltyConfigProgramsPidSubscriptionMembersRoute,
  postLoyaltyConfigProgramsPidSubscriptionsRoute,
  postLoyaltyConfigProgramsRoute,
  putLoyaltyConfigProgramsPidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const programHandler = app
  .openapi(getLoyaltyConfigProgramsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLoyaltyConfigProgramsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLoyaltyConfigProgramsPidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLoyaltyConfigProgramsPidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchLoyaltyConfigProgramsPidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putLoyaltyConfigProgramsPidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLoyaltyConfigProgramsPidAccountInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLoyaltyConfigProgramsPidContactCidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLoyaltyConfigProgramsPidPublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLoyaltyConfigProgramsPidSubscriptionMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLoyaltyConfigProgramsPidSubscriptionMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLoyaltyConfigProgramsPidSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
